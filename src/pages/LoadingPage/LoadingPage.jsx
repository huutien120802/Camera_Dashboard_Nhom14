import React from 'react';

import Dashboard from 'Layout/Dashboard/Dashboard';

import styles from './index.module.css';

function LoadingPage() {
  return (
    <div>
      <div className={styles.Dashboard}>
        <Dashboard />
      </div>

      <div className={styles.Container}>
        <div className={styles.Line} />
        <div className={styles.Line} />
        <div className={styles.Line} />
      </div>
    </div>
  );
}

export default LoadingPage;
