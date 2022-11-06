import { MainContext } from 'components/context/context';
import React, { useContext, useEffect, useState } from 'react';
import { TActionKind } from '../../interfaces/interfaces';
import styles from './pagination.module.css';

const Pagination: React.FC = () => {
  const { pagesCount, state, dispatch } = useContext(MainContext);
  const [buttons, setButtons] = useState<(string | number)[]>([] as (string | number)[]);

  const pageHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch({
      type: TActionKind.customPage,
      payload: Number((e.target as HTMLButtonElement).textContent),
    });
  };

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
      if (state.page <= 3) return [1, 2, 3, 4, '...', pagesCount];
      if (state.page <= pagesCount - 3)
        return [1, '..', state.page - 1, state.page, state.page + 1, '....', pagesCount];
      return [1, '...', pagesCount - 3, pagesCount - 2, pagesCount - 1, pagesCount];
    };

    setButtons(getPagination);
  }, [pagesCount, state.page]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.line}>
        <button
          onClick={() => {
            if (state.page > 1) {
              dispatch({ type: TActionKind.decrement, payload: 1 });
            }
          }}
          className={`${styles.page} ${styles.control}`}
        >
          Previous
        </button>
        {buttons.map((el: string | number) => (
          <button
            disabled={el === '..' || el === '...' || el === '....'}
            key={el}
            onClick={pageHandler}
            className={`${styles.page} ${state.page === el && styles.active}`}
          >
            {el}
          </button>
        ))}
        <button
          onClick={() => {
            if (state.page < pagesCount) {
              dispatch({ type: TActionKind.increment, payload: 1 });
            }
          }}
          className={`${styles.page} ${styles.control}`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
