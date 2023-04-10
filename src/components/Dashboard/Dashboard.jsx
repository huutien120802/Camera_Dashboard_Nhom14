import React from 'react';
import { NavLink } from 'react-router-dom';

import Home from 'assets/Icons/Home.png';
import Cameras from 'assets/Icons/Cameras.png';
import Warning from 'assets/Icons/Warning.png';
import Location from 'assets/Icons/Location.png';
import Statistic from 'assets/Icons/Statistic.png';
import Contact from 'assets/Icons/Contact.png';
import Setting from 'assets/Icons/Setting.png';
import Register from 'assets/Icons/Register.png';

import styles from './index.module.css';

function Dashboard() {
  return (
    <div className={styles.DashboardContainer}>
      <div className={styles.DashboardTitle}>Dashboard</div>

      <ul className={styles.DashboardItems}>
        <NavLink to="/" className={styles.DashboardItem}>
          <img src={Home} alt="home" className={styles.DashboardItemIcon} />
          Trang chủ
        </NavLink>

        <NavLink to="/cameras" className={styles.DashboardItem}>
          <img
            src={Cameras}
            alt="cameras"
            className={styles.DashboardItemIcon}
          />
          Quản lí Camera
        </NavLink>

        <NavLink to="/warning" className={styles.DashboardItem}>
          <img
            src={Warning}
            alt="warning"
            className={styles.DashboardItemIcon}
          />
          Cảnh báo
        </NavLink>

        <NavLink to="/location" className={styles.DashboardItem}>
          <img
            src={Location}
            alt="location"
            className={styles.DashboardItemIcon}
          />
          Khu vực
        </NavLink>

        <NavLink to="/statistic" className={styles.DashboardItem}>
          <img
            src={Statistic}
            alt="statistic"
            className={styles.DashboardItemIcon}
          />
          Thống kê
        </NavLink>

        <NavLink to="/contact" className={styles.DashboardItem}>
          <img
            src={Contact}
            alt="contact"
            className={styles.DashboardItemIcon}
          />
          Liên hệ
        </NavLink>
      </ul>

      <span className={styles.Divider} />

      <ul className={styles.DashboardItems}>
        <NavLink to="/setting" className={styles.DashboardItem}>
          <img
            src={Setting}
            alt="setting"
            className={styles.DashboardItemIcon}
          />
          Cài đặt
        </NavLink>

        <NavLink to="/register" className={styles.DashboardItem}>
          <img
            src={Register}
            alt="register"
            className={styles.DashboardItemIcon}
          />
          Đăng kí
        </NavLink>
      </ul>
    </div>
  );
}

export default Dashboard;
