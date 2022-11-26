import React from 'react';
import { Layout } from 'antd';
import styles from './footer.module.css';

export const Footer: React.FC = () => {
  return(
    <Layout.Footer className={styles.container}>
      Ant Design ©2018 Created by Ant UED
    </Layout.Footer>
  );
};
