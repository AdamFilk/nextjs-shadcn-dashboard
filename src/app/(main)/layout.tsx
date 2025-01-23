import { AppSidebar } from '@/components/layout/dashboard/app-sidebar';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { auth } from '@/lib/helpers/auth';
import { redirect } from 'next/navigation';

type MainLayoutProps = {
  children: React.ReactNode;
};
export default async function MainLayout({ children }: MainLayoutProps) {
  const session = await auth();
  if (!session) {
    return redirect('/auth/login');
  }
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>{children}</SidebarInset>
    </SidebarProvider>
  );
}
