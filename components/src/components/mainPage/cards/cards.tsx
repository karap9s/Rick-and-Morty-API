import React from 'react';
import styles from './cards.module.css';

const Cards: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.cards_wrapper}>
        <div className={styles.card}>
          <img
            className={styles.image}
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            alt="Rick"
          />
          <h1 className={styles.name}>Rick Sanchez</h1>
          <h3 className={styles.species}>Species: Human</h3>
          <h3 className={styles.gender}>Gender: Male</h3>
          <h3 className={styles.gender}>Status: Alive</h3>
          <button className={styles.more}>Show More</button>
        </div>
        <div className={styles.card}>
          <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="Rick" />
          <h1 className={styles.name}>Rick Sanchez</h1>
          <h3 className={styles.species}>Species: Human</h3>
          <h3 className={styles.gender}>Gender: Male</h3>
          <h3 className={styles.gender}>Status: Alive</h3>
          <button className={styles.more}>Show More</button>
        </div>
        <div className={styles.card}>
          <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="Rick" />
          <h1 className={styles.name}>Rick Sanchez</h1>
          <h3 className={styles.species}>Species: Human</h3>
          <h3 className={styles.gender}>Gender: Male</h3>
          <h3 className={styles.gender}>Status: Alive</h3>
          <button className={styles.more}>Show More</button>
        </div>
        <div className={styles.card}>
          <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="Rick" />
          <h1 className={styles.name}>Rick Sanchez</h1>
          <h3 className={styles.species}>Species: Human</h3>
          <h3 className={styles.gender}>Gender: Male</h3>
          <h3 className={styles.gender}>Status: Alive</h3>
          <button className={styles.more}>Show More</button>
        </div>
        <div className={styles.card}>
          <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="Rick" />
          <h1 className={styles.name}>Rick Sanchez</h1>
          <h3 className={styles.species}>Species: Human</h3>
          <h3 className={styles.gender}>Gender: Male</h3>
          <h3 className={styles.gender}>Status: Alive</h3>
          <button className={styles.more}>Show More</button>
        </div>
        <div className={styles.card}>
          <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="Rick" />
          <h1 className={styles.name}>Rick Sanchez</h1>
          <h3 className={styles.species}>Species: Human</h3>
          <h3 className={styles.gender}>Gender: Male</h3>
          <h3 className={styles.gender}>Status: Alive</h3>
          <button className={styles.more}>Show More</button>
        </div>
        <div className={styles.card}>
          <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="Rick" />
          <h1 className={styles.name}>Rick Sanchez</h1>
          <h3 className={styles.species}>Species: Human</h3>
          <h3 className={styles.gender}>Gender: Male</h3>
          <h3 className={styles.gender}>Status: Alive</h3>
          <button className={styles.more}>Show More</button>
        </div>
        <div className={styles.card}>
          <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="Rick" />
          <h1 className={styles.name}>Rick Sanchez</h1>
          <h3 className={styles.species}>Species: Human</h3>
          <h3 className={styles.gender}>Gender: Male</h3>
          <h3 className={styles.gender}>Status: Alive</h3>
          <button className={styles.more}>Show More</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
