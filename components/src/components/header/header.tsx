import React, { useState } from 'react';
import styles from './header.module.css';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [active, setActive] = useState('home');

  return (
    <header className={styles.wrapper}>
      <Link
        onClick={() => setActive('home')}
        className={`${styles.link} ${active === 'home' && styles.active}`}
        to="/"
      >
        Home
      </Link>
      <Link
        onClick={() => setActive('form')}
        className={`${styles.link} ${active === 'form' && styles.active}`}
        to="/form"
      >
        Form
      </Link>
      <Link
        onClick={() => setActive('about')}
        className={`${styles.link} ${active === 'about' && styles.active}`}
        to="/about"
      >
        About
      </Link>
    </header>
  );
};

export default Header;
