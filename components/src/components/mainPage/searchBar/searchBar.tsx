import React, { Component, FormEvent } from 'react';
import styles from './searchBar.module.css';

const SearchBar: React.FC = () => {
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
      this.setState({ value: JSON.parse(localStorage.getItem('search') || '') });
    }

    componentWillUnmount(): void {
      localStorage.setItem('search', JSON.stringify(this.state.value));
    }

    render() {
      return (
        <>
          <input
            className={styles.search}
            type="text"
            placeholder="Search..."
            onChange={this.handlerInput}
            value={this.state.value}
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
