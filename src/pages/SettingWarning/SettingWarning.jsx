import React from 'react';

import DropButton from 'assets/Icons/DropButton.png';
import Person from 'assets/Images/missingperson1.png';
import Meco from 'assets/Images/meco_office.png';

import styles from './index.module.css';

function SettingWarning() {
  return (
    <>
      <p>Cài đặt</p>

      <div className={styles.ContainerInfo}>
        <p>Tên cảnh báo:</p>

        <input className={styles.InputNameWarning} type="text" placeholder="Cảnh báo 1" />
      </div>

      <div className={styles.ContainerSetting}>
        <div className={styles.Header}>
          <p>Cảnh báo theo thời gian</p>

          <img src={DropButton} alt="DropButton" />
        </div>

        <div className={styles.Center}>
          <p className={styles.CenterTitle}>Khung thời gian cảnh báo</p>

          <span>Từ</span>
          <input type="text" />

          <span>Đến</span>
          <input type="text" />

          <span>Mức độ cảnh báo</span>
          <select className={styles.Select} id="">
            <option value="high">High</option>

            <option value="medium">Medium</option>

            <option value="low">Low</option>
          </select>
        </div>
      </div>

      <div className={styles.ContainerSetting}>
        <div className={styles.Header}>
          <p>Cảnh báo theo khuôn mặt</p>

          <img src={DropButton} alt="DropButton" />
        </div>

        <div className={styles.Center2}>
          <p className={styles.CenterTitle}>Chọn khuôn mặt được dùng để cảnh báo:</p>

          <img className={styles.ImgPerson} src={Person} alt="person" />
        </div>
      </div>

      <div className={styles.ContainerSetting}>
        <div className={styles.Header}>
          <p>Cảnh báo theo khu vực</p>

          <img src={DropButton} alt="DropButton" />
        </div>

        <div className={styles.Center3}>
          <p className={styles.CenterTitle}>Chọn khu vực để cảnh báo:</p>

          <img className={styles.ImgWarning} src={Meco} alt="person" />
        </div>
      </div>

      <div className={styles.ContainerButton}>
        <button type="button" className={styles.Button}>
          Cancel
        </button>

        <button type="button" className={styles.Button}>
          Save
        </button>
      </div>
    </>
  );
}

export default SettingWarning;
