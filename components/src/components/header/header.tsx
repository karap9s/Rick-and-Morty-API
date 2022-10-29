import React, { useContext, useState } from 'react';
import styles from './header.module.css';
import { Link } from 'react-router-dom';
import { MainContext } from 'components/context/context';

const Header: React.FC = () => {
  const { currentCharacter, active, setActive } = useContext(MainContext);

  return (
    <header className={styles.wrapper}>
      <div className={styles.link_wrapper}>
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
      </div>
      {currentCharacter && (
        <div className={styles.position_wrapper}>
          <p className={styles.position}>{currentCharacter}</p>
        </div>
      )}
    </header>
  );
};

export default Header;
