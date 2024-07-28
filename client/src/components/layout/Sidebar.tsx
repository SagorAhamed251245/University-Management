const { Sider } = Layout;
import { adminPaths } from "../../routes/admin.routes";
import { facultyPaths } from "../../routes/faculty.routes";
import { studentPaths } from "../../routes/student.routes";
import { SidebarItemsGenerator } from "../../utils/sidebarItemsGenerator";
import { Layout, Menu } from "antd";

const Sidebar = () => {
  let sidebarItems;

  const userRole = { ADMIN: "admin", FACULTY: "faculty", STUDENT: "student" };

  const role = "student";
  switch (role) {
    case userRole.ADMIN:
      sidebarItems = SidebarItemsGenerator(adminPaths, userRole.ADMIN);
      break;
    case userRole.FACULTY:
      sidebarItems = SidebarItemsGenerator(facultyPaths, userRole.FACULTY);
      break;
    case userRole.STUDENT:
      sidebarItems = SidebarItemsGenerator(studentPaths, userRole.STUDENT);
      break;

    default:
      [
        {
          key: "",
          label: "",
          children: [
            {
              key: "",
              label: "",
            },
          ],
        },
      ];
      break;
  }

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
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
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarItems!}
      />
    </Sider>
  );
};

export default Sidebar;
