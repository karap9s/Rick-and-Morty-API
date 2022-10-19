import React, { FormEvent, useEffect, useState } from 'react';
import styles from './searchBar.module.css';
import Pic from '../../../assets/icons/1200px-Magnifying_glass_icon.png';
import { SearchProps } from 'components/interfaces/interfaces';

const Search: React.FC<SearchProps> = (props: SearchProps) => {
  const [search, setSearch] = useState(localStorage.getItem('search') || '');

  const handlerInput = (event: FormEvent<HTMLInputElement>): void => {
    setSearch(event.currentTarget.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    props.updateData(search);
  };

  useEffect(() => {
    localStorage.setItem('search', search);
  });

  useEffect(() => {
    props.updateData(search);
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.search_form}>
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
          onChange={handlerInput}
          value={search}
        />
        <button type="submit" className={styles.search_btn}>
          <img src={Pic} alt="button" width={30} />
        </button>
      </form>
    </>
  );
};

export default Search;
