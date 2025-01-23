import { Content } from '@/components/layout/dashboard/content';
import { TBreadcrumb } from '@/types/ui/layout';

const breadcrumb: TBreadcrumb = [
  { label: 'Settings', href: '/settings/organization', isActive: false },
  { label: 'Website', href: '/settings/Website', isActive: true },
];

type WebsiteLayoutProps = {
  children: React.ReactNode;
};
export default function WebsiteSettingLayout({ children }: WebsiteLayoutProps) {
  return <Content breadcrumb={breadcrumb}>{children}</Content>;
}
