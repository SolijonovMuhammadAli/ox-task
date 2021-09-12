import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import "./css/Layout.css";
import { Link } from "react-router-dom";
import { TOKEN } from "./../const";

const { Header, Sider, Content } = Layout;

function Layouted(props) {
  const [collapse, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapse);
  };
  const LogOut = () => {
    localStorage.removeItem(TOKEN);
    window.location.href = "/";
  };
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapse}>
        <h2 className="my-2 text-center text-light">Logo</h2>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            <Link to="/dashboard">Data</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            <Link to="/sort">Sort</Link>
          </Menu.Item>
          <Menu.Item key="3" onClick={LogOut} icon={<UploadOutlined />}>
            Log out
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <span className="trigger mx-2" onClick={toggle}>
            {collapse ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </span>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          {props.children}
        </Content>
      </Layout>
    </Layout>
  );
}

export default Layouted;
