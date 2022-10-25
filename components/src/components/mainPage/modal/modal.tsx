import { getAirDate, getEpisode, getEpisodeName } from 'components/api/api';
import { MainContext } from 'components/context/context';
import { ICards, TSeries } from 'components/interfaces/interfaces';
import React, { useContext, useEffect, useState } from 'react';
import styles from './modal.module.css';

const Modal: React.FC<ICards> = (props: ICards) => {
  const [content, setContent] = useState<TSeries[]>([]);
  const [arr, setArr] = useState<TSeries[]>([]);
  const msg = useContext(MainContext);

  // const series = async (episodes: string[]): Promise<void> => {
  //   setContent([] as TSeries[]);
  //   for (let i = 0; i < episodes.length; i++) {
  //     const item = episodes[i];
  //     const last = item.lastIndexOf('/');
  //     const result = item.substring(last + 1, item.length);
  //     const name = await getEpisodeName(Number(result));
  //     const date = await getAirDate(Number(result));
  //     const episode = await getEpisode(Number(result));
  //     setContent([...content, { name: name, date: date, episode: episode, key: i.toString() }]);
  //   }
  // };

  useEffect(() => {
    const series = async (episodes: string[]): Promise<void> => {
      setContent([] as TSeries[]);
      for (let i = 0; i < episodes.length; i++) {
        const item = episodes[i];
        const last = item.lastIndexOf('/');
        const result = item.substring(last + 1, item.length);
        const name = await getEpisodeName(Number(result));
        const date = await getAirDate(Number(result));
        const episode = await getEpisode(Number(result));
        setArr([...arr, { name: name, date: date, episode: episode, key: (i + 1).toString() }]);
      }
      setContent([...arr]);
    };

    series(props.episode);
  }, [props.episode]);

  // const name = await getEpisodeName(Number(result));
  // const date = await getAirDate(Number(result));
  // const episode = await getEpisode(Number(result));

  // <tr className={styles.episodes_series} key={i + 1}>
  //   <th>{i + 1}</th>
  //   <th>{name}</th>
  //   <th>{date}</th>
  //   <th>{episode}</th>
  // </tr>;

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
            <div className={styles.episodes}>
              <h2 className={styles.episodes_heading}>List of episodes</h2>
              <table className={styles.episodes_th}>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Air Date</th>
                    <th>Episode</th>
                  </tr>
                </thead>
                <tbody>
                  {content.map((row) => (
                    <tr className={styles.episodes_series} key={row.key}>
                      <th>{row.key}</th>
                      <th>{row.name}</th>
                      <th>{row.date}</th>
                      <th>{row.episode}</th>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
