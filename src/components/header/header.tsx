import React from 'react';
import { Layout, Typography } from 'antd';
import { grey } from '@ant-design/colors';
import styles from './header.module.css';

export const Header: React.FC = () => {
  return(
    <Layout.Header className="header">
      <div className="logo" />
      <Typography.Title
        className={styles.title}
        style={{color: grey[0]}}
      >
        Алгоритмы и структуры данных
      </Typography.Title>
    </Layout.Header>
  );
};
