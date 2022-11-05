import { MainContext } from 'components/context/context';
import React, { useContext, useEffect, useState } from 'react';
import styles from './pagination.module.css';
import { useDispatch } from 'react-redux';
import { IMainReducer } from '../../interfaces/interfaces';
import { decrement, increment, pageHandler } from '../../redux/toolkitSlice';
import { useAppSelector } from '../../../hooks';

const Pagination: React.FC = () => {
  // const { page, setPage, pagesCount } = useContext(MainContext);
  const page = useAppSelector((state: IMainReducer) => state.main.page);
  const pagesCount = useAppSelector((state: IMainReducer) => state.main.pagesCount);
  const dispatch = useDispatch();
  const [buttons, setButtons] = useState<(string | number)[]>([] as (string | number)[]);

  useEffect(() => {
    const getPagination = () => {
      switch (pagesCount) {
        case 0:
          return [];
        case 1:
          return [1];
        case 2:
          return [1, 2];
        case 3:
          return [1, 2, 3];
        case 4:
          return [1, 2, 3, 4];
        case 5:
          return [1, 2, 3, 4, 5];
        default:
          break;
      }
      if (page <= 3) return [1, 2, 3, 4, '...', pagesCount];
      if (page <= pagesCount - 3) return [1, '..', page - 1, page, page + 1, '....', pagesCount];
      return [1, '...', pagesCount - 3, pagesCount - 2, pagesCount - 1, pagesCount];
    };

    setButtons(getPagination);
  }, [pagesCount, page]);

  const handler = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(pageHandler(Number((e.target as HTMLButtonElement).textContent)));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.line}>
        <button
          onClick={() => dispatch(decrement())}
          className={`${styles.page} ${styles.control}`}
        >
          Previous
        </button>
        {buttons.map((el: string | number) => (
          <button
            disabled={el === '..' || el === '...' || el === '....'}
            key={el}
            onClick={handler}
            className={`${styles.page} ${page === el && styles.active}`}
          >
            {el}
          </button>
        ))}
        <button
          onClick={() => dispatch(increment())}
          className={`${styles.page} ${styles.control}`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
