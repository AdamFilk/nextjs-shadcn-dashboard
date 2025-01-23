import { TBreadcrumb } from '@/types/ui/layout';
import { ContentHeader } from './content-header';

type ContentProps = {
  children: React.ReactNode;
  breadcrumb?: TBreadcrumb;
};

export function Content({ children, breadcrumb }: ContentProps) {
  return (
    <>
      <ContentHeader breadcrumb={breadcrumb} />
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">{children}</div>
    </>
  );
}
