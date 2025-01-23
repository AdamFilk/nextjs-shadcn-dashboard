import { Content } from '@/components/layout/dashboard/content';
import { TBreadcrumb } from '@/types/ui/layout';

const breadcrumb: TBreadcrumb = [{ label: 'Dashboard', href: '/dashboard', isActive: true }];

type DashboardLayoutProps = {
  children: React.ReactNode;
};
export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return <Content breadcrumb={breadcrumb}>{children}</Content>;
}
