import React from 'react';
import Cards from './cards/cards';
import Search from './searchBar/searchBar';
import styles from './mainPage.module.css';
import Pagination from './pagination/pagination';

const MainPage: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Search />
      <Cards />
      <Pagination />
    </div>
  );
};

export default MainPage;
