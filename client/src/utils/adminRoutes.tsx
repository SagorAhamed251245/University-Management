import { ReactNode } from "react";
import { adminPaths } from "../routes/admin.routes";
import { Link } from "react-router-dom";
// import { MenuProps } from "antd";

interface AdminPathItem {
  name?: string;
  path?: string;
  element?: ReactNode;
  children?: AdminPathItem[];
}
interface TAdmin {
  key: string;
  label: ReactNode;
}
interface AdminSidebarItem {
  key: string;
  label: ReactNode;
  children?: TAdmin[];
}
export const adminRoutes = adminPaths.reduce((acc: AdminPathItem[], item) => {
  if (item.path && item.element) {
    acc.push({ path: item.path, element: item.element });
  }
  if (item.children) {
    item.children.forEach((child) => {
      acc.push({ path: child.path, element: child.element });
    });
  }
  return acc;
}, []);

export const adminSidebar = adminPaths.reduce(
  (acc: AdminSidebarItem[], item) => {
    if (item.path && item.name) {
      acc.push({
        key: item.name,
        label: <Link to={`/admin/${item.path}`}>{item.name}</Link>,
      });
    }
    if (item.children) {
      acc.push({
        key: item.name,
        label: item.name,

        children: item.children.map((child) => ({
          key: child.name,
          label: <Link to={`/admin/${child.path}`}>{child.name}</Link>,
        })),
      });
    }
    return acc;
  },
  []
);
