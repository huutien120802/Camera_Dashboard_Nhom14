import React from 'react';
import { Link } from 'react-router-dom';

import styles from './index.module.css';

function LoginPage() {
  return (
    <div className={styles.Container}>
      <div className={styles.Card}>
        <div className={styles.Logo}>
          LOGO
        </div>

        <div className={styles.TopContainer}>
          <div className={styles.SubTitle1}>
            Camera Dashboard
          </div>

          <div className={styles.Title}>
            Log In
          </div>

          <div className={styles.SubTitle2}>
            Enter your email and password below
          </div>
        </div>

        <form className={styles.Form}>
          <label htmlFor="email" className={styles.Label}>EMAIL</label>

          <input
            type="email"
            placeholder="Email address"
          />

          <label htmlFor="password" className={styles.LabelContainer}>
            <div className={styles.Label}>PASSWORD</div>

            <button type="button" className={styles.Label1}>Forgot password?</button>
          </label>

          <input
            type="password"
            placeholder="Password"
          />

          <button type="submit" className={styles.Button}>Log In</button>
        </form>

        <div>
          Need help?
          {' '}
          <Link to="../" className={styles.Link}>Contact support</Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
