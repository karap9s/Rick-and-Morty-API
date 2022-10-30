import { getEpisodeData } from 'components/api/api';
import { MainContext } from 'components/context/context';
import { TMainContext, TSeries } from 'components/interfaces/interfaces';
import React, { useContext, useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import styles from './modal.module.css';

const Modal: React.FC = () => {
  const [content, setContent] = useState<TSeries[]>([]);

  const { card, currentCharacter, setCurrentCharacter } = useContext<TMainContext>(MainContext);

  useEffect(() => {
    const series = async (episodes: string[]): Promise<void> => {
      for (let i = 0; i < episodes.length; i++) {
        const item = episodes[i];
        const last = item.lastIndexOf('/');
        const result = item.substring(last + 1, item.length);
        const data = await getEpisodeData(Number(result));
        setContent((prev) => [
          ...prev,
          {
            name: data.name,
            date: data.air_date,
            episode: data.episode,
            key: (i + 1).toString(),
          },
        ]);
      }
    };

    series(card.episode);
  }, [card.episode]);

  return (
    <>
      {!currentCharacter ? (
        <Navigate to="/" />
      ) : (
        <div className={styles.modal_wrapper}>
          <Link onClick={() => setCurrentCharacter('')} className={styles.close_link} to={'/'}>
            <button className={styles.close}>Back</button>
          </Link>
          <div className={styles.modal}>
            <div className={styles.location}>
              <h2 className={styles.location_heading}>Location</h2>
              <p className={styles.location_name}>{card.location.name}</p>
            </div>
            <div className={styles.dimension}>
              <h2 className={styles.dimension_heading}>Origin</h2>
              <p className={styles.dimension_name}>{card.origin.name}</p>
            </div>
            <div className={styles.episodes}>
              <h2 className={styles.episodes_heading}>List of episodes</h2>
              <table className={styles.episodes_th}>
                <thead>
                  <tr className={styles.episodes_series}>
                    <th className={styles.episodes_elementHead}>#</th>
                    <th className={styles.episodes_elementHead}>Name</th>
                    <th className={styles.episodes_elementHead}>Air Date</th>
                    <th className={styles.episodes_elementHead}>Episode</th>
                  </tr>
                </thead>
                <tbody className={styles.episodes_body}>
                  {content.map((row) => (
                    <tr className={styles.episodes_series} key={row.key}>
                      <th className={styles.episodes_element}>{row.key}</th>
                      <th className={styles.episodes_element}>{row.name}</th>
                      <th className={styles.episodes_element}>{row.date}</th>
                      <th className={styles.episodes_element}>{row.episode}</th>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
