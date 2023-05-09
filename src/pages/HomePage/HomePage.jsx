import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { actionGetAllCameras, actionGetAllUsers } from 'store/actions';

import styles from './index.module.css';

function HomePage() {
  const dispatch = useDispatch();
  const cameras = useSelector((state) => state.Cameras.cameras);
  const users = useSelector((state) => state.Users.users);

  useEffect(() => {
    dispatch(actionGetAllCameras());
    dispatch(actionGetAllUsers());
  }, []);

  return (
    <div className={styles.Container}>
      <div className={styles.ContainerDescription}>
        <div className={styles.DescriptionItem}>
          <p className={styles.Title}>
            Tổng Camera
          </p>

          <p className={styles.Number}>
            {cameras.length ? cameras.length : 0}
          </p>
        </div>

        <div className={styles.DescriptionItem}>
          <p className={styles.Title}>
            Tổng số Profile
          </p>

          <p className={styles.Number}>
            {users.length ? users.length : 0}
          </p>
        </div>
      </div>

      <div className={styles.ContainerCamera}>
        {cameras ? (
          cameras.map((camera) => (
            <video muted autoPlay className={styles.CameraItem} key={camera._id}>
              <source src={camera.url ? '' : 'http://localhost:3009/api/videos'} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ))

        ) : <div className={styles.CameraItem} />}

      </div>
    </div>
  );
}

export default HomePage;
