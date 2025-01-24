import { ApiError } from '@/types/api/common';
import type { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from 'next';
import NextAuth, { AuthOptions, getServerSession, User } from 'next-auth';
import { authApi } from '../api/auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';

// You'll need to import and pass this
// to `NextAuth` in `app/api/auth/[...nextauth]/route.ts`

// Use it in server contexts
const handleCredentialSignIn = async (credentials?: { email: string; password: string }) => {
  try {
    if (!credentials) {
      throw new Error('No credentials provided');
    }
    const resdata = await authApi.login(credentials);
    return {
      token: resdata.data.token,
      ...resdata.data.user,
    };
  } catch (error: unknown) {
    const err = error as ApiError;
    throw new Error(err.error.message);
  }
};

const handleGoogleSignIn = async (token: string) => {
  try {
    const resdata = await authApi.googleSignIn(token);
    return {
      token: resdata.data.token,
      ...resdata.data.user,
    };
  } catch (error: unknown) {
    const err = error as ApiError;
    throw new Error(err?.error?.message || 'An error occurred');
  }
};

const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        return await handleCredentialSignIn(credentials);
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  pages: {
    signIn: '/auth/login',
  },
  callbacks: {
    async jwt({ token, user, trigger, session, account }) {
      if (account && account.provider === 'google' && account.id_token) {
        const result = await handleGoogleSignIn(account.id_token);
        console.log(result);
        token = result;
      }
      if (user) {
        const { token: accessToken, ...userData } = user as User;
        token = {
          token: accessToken,
          user: userData,
        };
        if (trigger === 'update' && session) {
          token.user = { ...token.user, ...session };
        }
      }
      return token;
    },
    async session({ session, token }) {
      session = { ...session, ...token };
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export function auth(
  ...args:
    | [GetServerSidePropsContext['req'], GetServerSidePropsContext['res']]
    | [NextApiRequest, NextApiResponse]
    | []
) {
  return getServerSession(...args, authOptions);
}

export default handler;
