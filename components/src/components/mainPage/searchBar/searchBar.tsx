import React, { Component, FormEvent } from 'react';
import styles from './searchBar.module.css';
import Pic from '../../../assets/icons/1200px-Magnifying_glass_icon.png';
import { MyProps } from 'components/interfaces/interfaces';

class Search extends Component<MyProps, { value: string }> {
  constructor(props: MyProps) {
    super(props);

    this.state = {
      value: localStorage.getItem('search') || '',
    };

    this.handlerBeforeUnload = this.handlerBeforeUnload.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handlerInput = (event: FormEvent<HTMLInputElement>): void => {
    this.setState({ value: event.currentTarget.value });
  };

  async handleSubmit(e: React.FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();
    const { value } = this.state;
    this.props.updateData(value);
  }

  handlerBeforeUnload(): void {
    localStorage.setItem('search', this.state.value);
    window.removeEventListener('beforeunload', this.handlerBeforeUnload);
  }

  componentDidMount(): void {
    window.addEventListener('beforeunload', this.handlerBeforeUnload);
    this.props.updateData(this.state.value);
  }

  componentWillUnmount(): void {
    this.handlerBeforeUnload();
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit} className={styles.search_form}>
          <select name="filter" id="filter">
            <option value="name">Name</option>
            <option value="species">Species</option>
            <option value="gender">Gender</option>
            <option value="status">Status</option>
          </select>
          <input
            className={styles.search}
            type="text"
            placeholder="Search..."
            onChange={this.handlerInput}
            value={this.state.value}
          />
          <button type="submit" className={styles.search_btn}>
            <img src={Pic} alt="button" width={30} />
          </button>
        </form>
      </>
    );
  }
}

export default Search;
