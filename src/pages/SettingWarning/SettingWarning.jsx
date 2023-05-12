import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { actionAddWarning } from 'store/actions';

import DropButton from 'assets/Icons/DropButton.png';
import Person from 'assets/Images/missingperson1.png';
import Meco from 'assets/Images/meco_office.png';

import styles from './index.module.css';

function SettingWarning() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [selectedValue, setSelectedValue] = useState('High');

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAddWarning = () => {
    dispatch(actionAddWarning({
      content: name,
      location: 'H56213454',
      serial: 'ABC456-fds789',
      securityLevel: selectedValue,
      playback: '/',
    }));
  };

  return (
    <>
      <p>Cài đặt</p>

      <div className={styles.ContainerInfo}>
        <p>Tên cảnh báo:</p>

        <input
          className={styles.InputNameWarning}
          type="text"
          placeholder="Cảnh báo 1"
          value={name}
          onChange={handleNameChange}
        />
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
          <select
            className={styles.Select}
            id=""
            onChange={handleSelectChange}
            value={selectedValue}
          >
            <option value="High">High</option>

            <option value="Medium">Medium</option>

            <option value="Low">Low</option>
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

        <button type="button" onClick={handleAddWarning} className={styles.Button}>
          Save
        </button>
      </div>
    </>
  );
}

export default SettingWarning;
