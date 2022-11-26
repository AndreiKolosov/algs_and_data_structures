import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import styles from './side-menu.module.css';

export const SideMenu: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return(
    <Layout.Sider
      className={styles.container}
      collapsible
      collapsed={collapsed}
      onCollapse={value => setCollapsed(value)}
    >
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item key={1}>
          <Link
            to="/"
          >
            Главная
          </Link>
        </Menu.Item>
      </Menu>
    </Layout.Sider>
  );
};
