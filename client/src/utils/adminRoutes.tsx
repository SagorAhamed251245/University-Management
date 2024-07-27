import { adminPaths } from "../routes/admin.routes";

interface AdminPathItem {
  name?: string;
  path?: string;
  element?: JSX.Element;
  children?: AdminPathItem[];
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

export default adminPaths;
