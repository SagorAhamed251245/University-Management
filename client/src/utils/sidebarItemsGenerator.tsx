import { TSidebarItem, TUserPath } from "../types";
import { Link } from "react-router-dom";

export const SidebarItemsGenerator = (items: TUserPath[], role: string) => {
  console.log(items);
  const sidebarItems = items.reduce((acc: TSidebarItem[], item) => {
    if (item.path && item.name) {
      acc.push({
        key: item.name,
        label: <Link to={`/${role}/${item.path}`}>{item.name}</Link>,
      });
    }
    if (item.children) {
      acc.push({
        key: item.name!,
        label: item.name,

        children: item.children.map((child) => ({
          key: child.name!,
          label: <Link to={`/${role}/${child.path}`}>{child.name}</Link>,
        })),
      });
    }
    return acc;
  }, []);
  return sidebarItems;
};
