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
        <div className={styles.CameraItem} />

        <video muted autoPlay className={styles.CameraItem}>
          <source src="https://rr5---sn-npoe7ns6.googlevideo.com/videoplayback?expire=1683561534&ei=3sdYZMWBKYbaigSp9JPgAQ&ip=162.212.152.195&id=o-APabFAWvZaNUmh-NRSMgNMza5pDmbYdUih6_nbCLfaZ0&itag=22&source=youtube&requiressl=yes&spc=qEK7B95_qzm_r3xP7WW3l6Imr7Z9GGU&vprv=1&svpuc=1&mime=video%2Fmp4&cnr=14&ratebypass=yes&dur=488.431&lmt=1682750849531233&fexp=24007246&c=ANDROID&txp=5532434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIhAMVPCgMmDshxLsoPbhur2-YDN-ow2fpYdogEl3_Jn_N3AiAqOXvGFntVo62JoHjHHl88awCayPGFwO3WR_JzSoFP2A%3D%3D&rm=sn-gjo-vgql7l&req_id=120e66d5d9bca3ee&cmsv=e&redirect_counter=2&cm2rm=sn-p5qe767l&cms_redirect=yes&mh=hE&mip=2001:ee0:4f0f:c3d0:546b:61f7:ab26:97ad&mm=34&mn=sn-npoe7ns6&ms=ltu&mt=1683539584&mv=m&mvi=5&pl=48&lsparams=mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIhAOEMheAT3B87HNrbLRyJOIsklJ3jT3SaZyVK0C8BjfEKAiAbssTcrm6WgZOcNW3Dyk27rWIAtJxWdxY6k8pEyYifag%3D%3D" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className={styles.CameraItem} />

        <div className={styles.CameraItem} />

        <div className={styles.CameraItem} />
      </div>
    </div>
  );
}

export default HomePage;
