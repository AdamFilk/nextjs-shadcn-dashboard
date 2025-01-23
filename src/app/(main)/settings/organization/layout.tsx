import { Content } from '@/components/layout/dashboard/content';
import { TBreadcrumb } from '@/types/ui/layout';

const breadcrumb: TBreadcrumb = [
  { label: 'Settings', href: '/settings/organization', isActive: false },
  { label: 'Organization', href: '/settings/organization', isActive: true },
];

type OrganizationLayoutProps = {
  children: React.ReactNode;
};
export default function OrganizationSettingLayout({ children }: OrganizationLayoutProps) {
  return <Content breadcrumb={breadcrumb}>{children}</Content>;
}
