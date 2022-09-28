import React, { Component, FormEvent } from 'react';
import styles from './searchBar.module.css';

const SearchBar: React.FC = () => {
  class Search extends Component {
    constructor(props: string) {
      super(props);

      this.state = {
        value: '',
      };
    }

    handlerInput(event: FormEvent<HTMLInputElement>) {
      localStorage.setItem('search', JSON.stringify(event.currentTarget.value));
    }

    componentWillUnmount(): void {
      this.handlerInput;
      console.log(JSON.parse(localStorage.getItem('search') || ''));
    }

    render() {
      return (
        <>
          <input
            className={styles.search}
            type="text"
            placeholder="Search..."
            onChange={this.handlerInput}
            defaultValue={JSON.parse(localStorage.getItem('search') || '')}
          />
        </>
      );
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.search_wrapper}>
        <Search />
      </div>
    </div>
  );
};

export default SearchBar;
