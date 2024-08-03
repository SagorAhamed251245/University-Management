import { Layout, Menu } from "antd";
import { adminPaths } from "../../routes/admin.routes";
import { facultyPaths } from "../../routes/faculty.routes";
import { studentPaths } from "../../routes/student.routes";
import { SidebarItemsGenerator } from "../../utils/sidebarItemsGenerator";
import { TMenuItem } from "../../types";
import { superAdminPaths } from "../../routes/superAdmin.routes";

const { Sider } = Layout;

const Sidebar = () => {
  let sidebarItems: TMenuItem[] = [];

  const role =
    JSON.parse(
      JSON.parse(localStorage.getItem("persist:auth") || "{}").user || "{}"
    ).role || null;

  const userRole = {
    SUPER_ADMIN: "superAdmin",
    ADMIN: "admin",
    FACULTY: "faculty",
    STUDENT: "student",
  };

  switch (role) {
    case userRole.SUPER_ADMIN:
      sidebarItems = SidebarItemsGenerator(
        superAdminPaths,
        userRole.SUPER_ADMIN
      ) as TMenuItem[];
      break;
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
