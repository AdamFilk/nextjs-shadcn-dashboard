'use client';
import { Button } from '@/components/ui/button';
import { signOut } from 'next-auth/react';

export default function HomeComponent() {
  const handleSignOut = async () => {
    signOut({ callbackUrl: '/auth/login', redirect: true });
  };
  return <Button onClick={handleSignOut}>Logout</Button>;
}
