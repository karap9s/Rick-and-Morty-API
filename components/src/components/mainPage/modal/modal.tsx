import { ICards } from 'components/interfaces/interfaces';
import React from 'react';
import styles from './modal.module.css';

const Modal: React.FC<ICards> = (props: ICards) => {
  return (
    <>
      <div className={styles.backdrop}>
        <div className={styles.modal_wrapper}>
          <button onClick={() => props.modalHandler?.(false)} className={styles.close}>
            X
          </button>
          <div className={styles.modal}>
            <div className={styles.location}>
              <h2 className={styles.location_heading}>Location</h2>
              <p className={styles.location_name}>{props.location.name}</p>
            </div>
            <div className={styles.dimension}>
              <h2 className={styles.dimension_heading}>Origin</h2>
              <p className={styles.dimension_name}>{props.origin.name}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
