import { auth } from '@/lib/helpers/auth';
import { redirect } from 'next/navigation';

type MainLayoutProps = {
  children: React.ReactNode;
};
export default async function MainLayout({ children }: MainLayoutProps) {
  const session = await auth();
  if (!session) {
    redirect('/auth/login');
  }
  return children;
}
