import React from 'react';
import styles from './about.module.css';
import Daniil from '../../assets/img/Daniil.jpg';

const About: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <img className={styles.image} src={Daniil} alt="Rick" />
        <h1 className={styles.name}>Daniil Sharenkov</h1>
        <h3 className={styles.species}>Species: Human</h3>
        <h3 className={styles.gender}>Gender: Male</h3>
        <h3 className={styles.gender}>Status: Alive</h3>
        <button className={styles.more}>Show More</button>
      </div>
    </div>
  );
};

export default About;
