import React, { Component } from 'react';
import styles from './loader.module.css';
import Morty from '../../assets/img/Morty_Smith.png';

export class Loader extends Component<Record<string, never>> {
  constructor(props: Record<string, never>) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className={styles.loader_wrapper}>
        <img src={Morty} alt="Morty Loader" />
        <div className={styles.text_wrapper}>
          <h2 className={styles.loading}>Loading</h2>
          <div className={styles.lds_ellipsis}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    );
  }
}
