import { Layout, Menu } from "antd";
import { adminPaths } from "../../routes/admin.routes";
import { facultyPaths } from "../../routes/faculty.routes";
import { studentPaths } from "../../routes/student.routes";
import { SidebarItemsGenerator } from "../../utils/sidebarItemsGenerator";
import { TMenuItem } from "../../types";
// Assume TMenuItem is the correct type for Ant Design Menu items

const { Sider } = Layout;

const Sidebar = () => {
  let sidebarItems: TMenuItem[] = [];

  const userRole = { ADMIN: "admin", FACULTY: "faculty", STUDENT: "student" };

  const role = "student";
  switch (role) {
    case userRole.ADMIN:
      sidebarItems = SidebarItemsGenerator(
        adminPaths,
        userRole.ADMIN
      ) as TMenuItem[];
      break;
    case userRole.FACULTY:
      sidebarItems = SidebarItemsGenerator(
        facultyPaths,
        userRole.FACULTY
      ) as TMenuItem[];
      break;
    case userRole.STUDENT:
      sidebarItems = SidebarItemsGenerator(
        studentPaths,
        userRole.STUDENT
      ) as TMenuItem[];
      break;

    default:
      sidebarItems = [];
      break;
  }

  return (
    <Sider breakpoint="lg" collapsedWidth="0">
      <div
        style={{
          height: "4rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        <h1>PH University</h1>
      </div>
      {sidebarItems.length > 0 && (
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={sidebarItems}
        />
      )}
    </Sider>
  );
};

export default Sidebar;
