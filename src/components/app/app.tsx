import React from 'react';
import { Layout } from 'antd';
import { Header } from '../header/header';
import { SideMenu } from '../side-menu/side-menu';
import styles from './app.module.css';

export const App: React.FC = () => {

  return(
    <Layout
      style={{ minHeight: '100vh' }}
      className={styles.container}
    >
      <Header />
      <Layout>
        <SideMenu />
        <Layout.Content>
          Some content
        </Layout.Content>
      </Layout>
    </Layout>
  );
};
