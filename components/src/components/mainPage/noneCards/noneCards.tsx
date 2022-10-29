import React from 'react';
import styles from './noneCards.module.css';

const NoneCards: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.request}>There is no cards for your request</h2>
    </div>
  );
};

export default NoneCards;
