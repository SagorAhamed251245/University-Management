import { Button, Layout } from "antd";
import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import { logout } from "../../redux/features/auth/authSlice";
import { useAppDispatch } from "../../redux/hook";

const { Header, Content } = Layout;

const MainLayout = () => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <>
      <Layout style={{ height: "100vh" }}>
        <Sidebar></Sidebar>
        <Layout>
          <Header>
            <Button onClick={handleLogout}>Logout</Button>
          </Header>
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
        </Layout>
      </Layout>
    </>
  );
};

export default MainLayout;
