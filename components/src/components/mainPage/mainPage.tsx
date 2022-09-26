import React from 'react';
import styles from './mainPage.module.css';

const MainPage: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.search_wrapper}>
        <input className={styles.search} type="text" placeholder="Search..." />
      </div>
    </div>
  );
};

export default MainPage;
