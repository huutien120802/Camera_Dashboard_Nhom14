import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import HeaderIcon from 'assets/Icons/HeaderIcon.png';
import Notification from 'assets/Icons/Notification.png';
import Search from 'assets/Icons/Search.png';

import styles from './index.module.css';

function Header({ title }) {
  const user = useSelector((state) => state.User.user);
  return (
    <div>
      <div className={styles.HeaderWrapper}>
        <div className={styles.HeaderTitleContainer}>
          <img src={HeaderIcon} alt={title} className={styles.HeaderIcon} />

          <div className={styles.Title}>
            {title}
          </div>
        </div>

        <div className={styles.RightContainer}>
          <img src={Search} alt="search" />

          <img src={Notification} alt="notification" />

          <div className={styles.Divider} />

          <div className={styles.ProfileContainer}>
            {user.username}

            <div className={styles.Circle} />
          </div>
        </div>
      </div>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
