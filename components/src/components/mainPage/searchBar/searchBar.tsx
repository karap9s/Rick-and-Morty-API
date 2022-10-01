import React, { Component, FormEvent } from 'react';
import styles from './searchBar.module.css';
import Pic from '../../../assets/icons/1200px-Magnifying_glass_icon.png';

class Search extends Component<unknown, { value: string }> {
  constructor(props: string) {
    super(props);

    this.state = {
      value: '',
    };
  }

  handlerInput = (event: FormEvent<HTMLInputElement>) => {
    this.setState({ value: event.currentTarget.value });
  };

  UNSAFE_componentWillMount(): void {
    this.setState({ value: JSON.parse(localStorage.getItem('search') || JSON.stringify('')) });
    console.log(this.state.value);
  }

  componentDidMount(): void {
    window.addEventListener('onload', () => {
      this.setState({ value: JSON.parse(localStorage.getItem('search') || JSON.stringify('')) });
    });
  }

  componentWillUnmount(): void {
    localStorage.setItem('search', JSON.stringify(this.state.value));
    window.addEventListener('unload', () => {
      localStorage.setItem('search', JSON.stringify(this.state.value));
    });
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
