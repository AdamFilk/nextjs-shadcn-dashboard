import { LucideIcon } from 'lucide-react';

export type TBreadcrumbItem = {
  label: string;
  href: string;
  isActive: boolean;
};

export type TBreadcrumb = TBreadcrumbItem[];

export type TNavSubItem = {
  title: string;
  url: string;
  isActive: boolean;
};

export type TNavItem = {
  title: string;
  url: string;
  icon: LucideIcon;
  isActive: boolean;
  items?: TNavSubItem[];
};
