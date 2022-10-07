import React from 'react';
import styles from './header.module.css';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className={styles.wrapper}>
      <Link className={styles.link} to="/">
        Home
      </Link>
      <Link className={styles.link} to="/form">
        Form
      </Link>
      <Link className={styles.link} to="/about">
        About
      </Link>
    </header>
  );
};

export default Header;
