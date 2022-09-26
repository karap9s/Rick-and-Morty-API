import React from 'react';
import styles from './notFound.module.css';

const NotFound: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.message}>Page Not Found</h3>
    </div>
  );
};

export default NotFound;
