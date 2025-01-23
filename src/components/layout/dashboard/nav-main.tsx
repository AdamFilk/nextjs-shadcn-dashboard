'use client';

import { ChevronRight, Gauge, Settings2 } from 'lucide-react';

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '@/components/ui/sidebar';
import { TNavItem } from '@/types/ui/layout';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

const data: TNavItem[] = [
  { title: 'Dashboard', url: '/dashboard', icon: Gauge, isActive: false },
  {
    title: 'Settings',
    url: '/settings',
    icon: Settings2,
    isActive: false,
    items: [
      {
        title: 'Organization',
        url: '/settings/organization',
        isActive: false,
      },
      {
        title: 'Website',
        url: '/settings/website',
        isActive: false,
      },
    ],
  },
];

export function NavMain() {
  const pathname = usePathname();
  const menuItems = useMemo(() => {
    return data.map((item) => {
      if (pathname.includes(item.url)) {
        if (item.items && item.items.length > 0) {
          item.items.forEach((subItem) => {
            if (pathname.includes(subItem.url)) {
              subItem.isActive = true;
            }
          });
        }
        return { ...item, isActive: true };
      }
      return item;
    });
  }, [pathname]);

  return (
    <SidebarGroup>
      {/* <SidebarGroupLabel>Platform</SidebarGroupLabel> */}
      <SidebarMenu>
        {menuItems.map((menuItem) =>
          menuItem.items && menuItem.items.length > 0 ? (
            <Collapsible
              key={menuItem.title}
              asChild
              defaultOpen={menuItem.isActive}
              className="group/collapsible"
            >
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton tooltip={menuItem.title}>
                    {menuItem.icon && <menuItem.icon />}
                    <span>{menuItem.title}</span>
                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {menuItem.items.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.title}>
                        <SidebarMenuSubButton asChild isActive={subItem.isActive}>
                          <a href={subItem.url}>
                            <span>{subItem.title}</span>
                          </a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          ) : (
            <SidebarMenuItem key={menuItem.title}>
              <SidebarMenuButton isActive={menuItem.isActive}>
                {menuItem.icon && <menuItem.icon />}
                <a href={menuItem.url}>{menuItem.title}</a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          )
        )}
      </SidebarMenu>
    </SidebarGroup>
  );
}
