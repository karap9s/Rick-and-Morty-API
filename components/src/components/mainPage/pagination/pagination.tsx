import { MainContext } from 'components/context/context';
import React, { useContext } from 'react';
import styles from './pagination.module.css';

const Pagination: React.FC = () => {
  const { page, setPage } = useContext(MainContext);

  const pageHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    setPage(Number((e.target as HTMLButtonElement).textContent));
  };

  const prevHandler = () => {
    if (page !== 1) {
      setPage(page - 1);
    }
  };

  const nextHandler = () => {
    if (page !== 43) {
      setPage(page + 1);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.line}>
        <button onClick={prevHandler} className={`${styles.page} ${styles.control}`}>
          Previous
        </button>
        <button onClick={pageHandler} className={styles.page}>
          1
        </button>
        <button onClick={pageHandler} className={styles.page}>
          2
        </button>
        <button onClick={pageHandler} className={styles.page}>
          3
        </button>
        <button onClick={pageHandler} className={styles.page}>
          4
        </button>
        <button onClick={pageHandler} className={styles.page}>
          5
        </button>
        <button onClick={pageHandler} className={styles.page}>
          6
        </button>
        <button onClick={pageHandler} className={styles.page}>
          7
        </button>
        <button onClick={pageHandler} className={styles.page}>
          8
        </button>
        <button onClick={nextHandler} className={`${styles.page} ${styles.control}`}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
