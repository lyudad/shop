import React, { useState } from 'react'
import { Layout as Wrapper, Menu, Breadcrumb } from 'antd';
import {
    Link,
    useLocation
  } from "react-router-dom";
import {
  DesktopOutlined,
  PieChartOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Wrapper;

export const Layout = ({children}) => {
  const location = useLocation();
  const [collapsed, changeCollapse] = useState(false);

  const onCollapse = collapsed => {
    changeCollapse(collapsed);
  };

  const selected = {
    '/': '1',
    '/details': '2'
  }

  return (
      <Wrapper style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={[selected[location.pathname]]} mode="inline">
            <Menu.Item key="1">
              <PieChartOutlined />
              <span><Link to="/" style={{color: selected[location.pathname] === '1' && 'white'} }>Home</Link></span>
            </Menu.Item>
            <Menu.Item key="2">
              <DesktopOutlined />
              <span><Link to="/details" style={{color: selected[location.pathname] === '2' && 'white'}}>Details</Link></span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Wrapper className="site-Wrapper">
          <Header className="site-Wrapper-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <div>{children}</div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Wrapper>
      </Wrapper>
    );
}