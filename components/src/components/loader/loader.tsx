import React from 'react';
import styles from './loader.module.css';
import Morty from '../../assets/img/Morty_Smith.png';

export const Loader: React.FC = () => {
  return (
    <div className={styles.loader_wrapper}>
      <img src={Morty} alt="Morty Loader" />
      <div className={styles.text_wrapper}>
        <h2 className={styles.loading}>Loading</h2>
        <div className={styles.lds_ellipsis}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
