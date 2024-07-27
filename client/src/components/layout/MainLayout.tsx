import { Layout, Menu, MenuProps } from "antd";
import { Outlet } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

const items: MenuProps["items"] = [
  {
    label: "Dashboard",
    key: "Dashboard",
  },
  {
    label: "Home",
    key: "Home",
  },
  {
    label: "Profile",
    key: "3",
  },
  {
    label: "User Management",
    key: "User Management",
    children: [
      {
        label: "users",
        key: "5",
      },
      {
        label: "Perchers",
        key: "6",
      },
    ],
  },
];
items.map((item, index) => {
  return { key: String(index + 1), label: item };
});
const MainLayout = () => {
  return (
    <>
      <Layout style={{ height: "100vh" }}>
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
            items={items}
          />
        </Sider>
        <Layout>
          <Header style={{ padding: 0 }} />
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              style={{
                padding: 0,
                minHeight: 360,
                borderRadius: "30px",
              }}
            >
              <Outlet />
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </>
  );
};

export default MainLayout;
