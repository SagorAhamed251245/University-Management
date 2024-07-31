import { ReactNode } from "react";
import { MenuProps } from "antd";

export type TSidebar = {
  key: string;
  label: ReactNode;
  children?: TSidebar[];
};

export type TSidebarItem = {
  key: string;
  label: ReactNode;
  children?: TSidebar[];
};

// Define the type for the items used in Ant Design Menu
export type TMenuItem = Required<MenuProps>["items"][number];
