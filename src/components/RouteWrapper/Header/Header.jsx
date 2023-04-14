import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import { actionLogout } from 'store/actions';

import HeaderIcon from 'assets/Icons/HeaderIcon.png';
import Notification from 'assets/Icons/Notification.png';
import Search from 'assets/Icons/Search.png';

import styles from './index.module.css';

function Header({ title }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.User.user);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    dispatch(actionLogout({ navigate }));
  };

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

            <button type="button" onClick={toggleMenu} className={styles.DropDown}>
              <div className={styles.Circle} />
            </button>

            {isOpen && (
            <div className={styles.DropDownMenu}>
              <div>
                <button type="button" onClick={handleLogout} className={styles.LogoutButton}>Logout</button>
              </div>
            </div>
            )}
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
