import { ReactNode } from "react";

export type TSidebar = {
  key?: string;
  label?: ReactNode;
};
export type TSidebarItem = {
  key?: string;
  type?: string;
  label?: ReactNode;
  children?: TSidebar[];
};
