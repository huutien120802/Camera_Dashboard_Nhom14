import React from 'react';

import styles from './index.module.css';

function HomePage() {
  return (
    <div className={styles.Container}>
      <div className={styles.ContainerDescription}>
        <div className={styles.DescriptionItem}>
          <p className={styles.Title}>
            Tổng Camera
          </p>

          <p className={styles.Number}>
            60
          </p>
        </div>

        <div className={styles.DescriptionItem}>
          <p className={styles.Title}>
            Tổng số Profile
          </p>

          <p className={styles.Number}>
            64
          </p>
        </div>
      </div>

      <div className={styles.ContainerCamera}>
        <div className={styles.CameraItem} />

        <div className={styles.CameraItem} />

        <div className={styles.CameraItem} />

        <div className={styles.CameraItem} />
      </div>
    </div>
  );
}

export default HomePage;
