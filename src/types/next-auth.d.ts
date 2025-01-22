import { TUser } from './api/auth';

declare module 'next-auth' {
  type User = {
    token: string;
  } & TUser;

  type Session = {
    token: string;
    user: TUser;
  };
}

declare module 'next-auth/jwt' {
  type JWT = {
    token: string;
    user: TUser;
  };
}
