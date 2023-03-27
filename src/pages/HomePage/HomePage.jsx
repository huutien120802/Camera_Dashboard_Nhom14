import React from 'react';

import styles from './index.module.css';

function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.container_description}>
        <div className={styles.description_item}>
          <p className={styles.title}>
            Tổng Camera
          </p>
          <p className={styles.number}>
            60
          </p>
        </div>
        <div className={styles.description_item}>
          <p className={styles.title}>
            Tổng số Profile
          </p>
          <p className={styles.number}>
            64
          </p>
        </div>
      </div>
      <div className={styles.container_camera}>
        <div className={styles.camera_item} />
        <div className={styles.camera_item} />
        <div className={styles.camera_item} />
        <div className={styles.camera_item} />
      </div>
    </div>
  );
}

export default HomePage;
