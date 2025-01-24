'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';
import z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import UIButton from '@/components/shared/buttons';
import { GoogleIcon } from '@/components/shared/icons/social-icons';

const loginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export function LoginForm({ className, ...props }: React.ComponentPropsWithoutRef<'form'>) {
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const onSubmit = async (values: z.infer<typeof loginFormSchema>) => {
    setLoading(true);
    const result = await signIn('credentials', {
      redirect: false,
      ...values,
    });
    if (result?.error) {
      setError(result.error);
    } else {
      router.replace('/'); // Redirect to a protected page after successful login
    }
    setLoading(false);
  };

  const handleGoogleLogin = async () => {
    const result = await signIn('google', { redirect: false });
    console.log(result);
    if (result?.error) {
      setError(result.error);
    } else if (result) {
      router.replace('/'); // Redirect to a protected page after successful login
    }
  };

  return (
    <Form {...form}>
      {error && <p className="text-red-500">{error}</p>}
      <form
        className={cn('flex flex-col gap-6', className)}
        {...props}
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold">Login to your account</h1>
          <p className="text-balance text-sm text-muted-foreground">
            Enter your email below to login to your account
          </p>
        </div>
        <div className="grid gap-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Password" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <UIButton type="submit" loading={loading} disabled={loading} text="Login" />
          <UIButton
            loading={loading}
            disabled={loading}
            text="Login with Google"
            icon={<GoogleIcon />}
            onClick={handleGoogleLogin}
          />
        </div>
      </form>
    </Form>
  );
}
