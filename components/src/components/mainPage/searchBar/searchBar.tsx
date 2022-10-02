import React, { Component, FormEvent } from 'react';
import styles from './searchBar.module.css';
import Pic from '../../../assets/icons/1200px-Magnifying_glass_icon.png';

class Search extends Component<unknown, { value: string }> {
  constructor(props: string) {
    super(props);

    this.state = {
      value: localStorage.getItem('search') || '',
    };

    this.handlerBeforeUnload = this.handlerBeforeUnload.bind(this);
  }

  handlerInput = (event: FormEvent<HTMLInputElement>) => {
    this.setState({ value: event.currentTarget.value });
  };

  handlerBeforeUnload() {
    localStorage.setItem('search', this.state.value);
    window.removeEventListener('beforeunload', this.handlerBeforeUnload);
  }

  componentDidMount(): void {
    window.addEventListener('beforeunload', this.handlerBeforeUnload);
  }

  componentWillUnmount(): void {
    this.handlerBeforeUnload();
  }

  render() {
    return (
      <>
        <div className={styles.search_form}>
          <input
            className={styles.search}
            type="text"
            placeholder="Search..."
            onChange={this.handlerInput}
            value={this.state.value}
          />
          <button className={styles.search_btn}>
            <img src={Pic} alt="button" width={30} />
          </button>
        </div>
      </>
    );
  }
}

export default Search;
