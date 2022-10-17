import { getAirDate, getEpisode, getEpisodeName } from 'components/api/api';
import { ICards } from 'components/interfaces/interfaces';
import React, { Component } from 'react';
import styles from './modal.module.css';

class Modal extends Component<ICards> {
  constructor(props: ICards) {
    super(props);

    // this.loopSeries.bind(this);
  }

  // loopSeries = async (episodes: string[]): any => {
  //   const content = [];

  //   for (let i = 0; i < episodes.length; i++) {
  //     const item = episodes[i];
  //     const last = item.lastIndexOf('/');
  //     const result = item.substring(last + 1, item.length);

  //     const name = await getEpisodeName(Number(result));
  //     const date = await getAirDate(Number(result));
  //     const episode = await getEpisode(Number(result));

  //     content.push(
  //       <tr className={styles.episodes_series}>
  //         <th>{i + 1}</th>
  //         <th>{name}</th>
  //         <th>{date}</th>
  //         <th>{episode}</th>
  //       </tr>
  //     );
  //   }

  //   return content;
  // };

  render() {
    return (
      <>
        <div className={styles.backdrop}>
          <div className={styles.modal_wrapper}>
            <button onClick={() => this.props.modalHandler?.(false)} className={styles.close}>
              X
            </button>
            <div className={styles.modal}>
              <div className={styles.location}>
                <h2 className={styles.location_heading}>Location</h2>
                <p className={styles.location_name}>{this.props.location.name}</p>
              </div>
              <div className={styles.dimension}>
                <h2 className={styles.dimension_heading}>Origin</h2>
                <p className={styles.dimension_name}>{this.props.origin.name}</p>
              </div>
              {/* <div className={styles.episodes}>
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
                  <tbody>{this.loopSeries(this.props.episode)}</tbody>
                </table>
              </div> */}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Modal;
