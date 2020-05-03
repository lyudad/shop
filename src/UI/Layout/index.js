import React, { useState } from 'react'
import {connect} from 'react-redux'
import { Layout as Wrapper, Menu, Button } from 'antd';
import { useAuth0 } from "Component/Auth0";
import {
  Link,
  useLocation
} from "react-router-dom";
import {
  DesktopOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import {logInAction, logOutAction} from 'Redux/Actions/auth'

const { Header, Content, Footer, Sider } = Wrapper;

export const LayoutComponent = ({ children, isAuth, logOut }) => {
  const location = useLocation();
  const [collapsed, changeCollapse] = useState(false);

  const onCollapse = collapsed => {
    changeCollapse(collapsed);
  };

  const { loginWithRedirect, logout } = useAuth0();

  const handleLogOut = () => {
    logOut()
    logout()
  }

  const selected = {
    '/': '1',
    '/details': '2',
    '/profile': '3'
  }

  return (
    <Wrapper style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={[selected[location.pathname]]} mode="inline">
          <Menu.Item key="1">
            <PieChartOutlined />
            <span><Link to="/" style={{ color: selected[location.pathname] === '1' && 'white' }}>Home</Link></span>
          </Menu.Item>
          <Menu.Item key="2">
            <DesktopOutlined />
            <span><Link to="/details" style={{ color: selected[location.pathname] === '2' && 'white' }}>Details</Link></span>
          </Menu.Item>
          <Menu.Item key="3">
            <DesktopOutlined />
            <span><Link to="/profile" style={{ color: selected[location.pathname] === '3' && 'white' }}>Profile</Link></span>
          </Menu.Item>
          <Menu.Item>
            <div>
              {!isAuth && (
                <Button onClick={() => loginWithRedirect({})}>Log in</Button>
              )}

              {isAuth && <Button onClick={handleLogOut}>Log out</Button>}
            </div>
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


const mapToProps = (store) => {
  return {
    isAuth: store.auth.isAuth,
  }
}

const actions = {
  logOut: logOutAction
}

export const Layout = connect(mapToProps, actions)(LayoutComponent);
