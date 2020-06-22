export interface SidebarItem {
  displayName: string;
  disabled?: boolean;
  iconName: string;
  route?: string;
  children?: SidebarItem[];
}
