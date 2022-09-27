import React from 'react';
import Cards from './cards/cards';
import styles from './mainPage.module.css';
import SearchBar from './searchBar/searchBar';

const MainPage: React.FC = () => {
  return (
    <>
      <SearchBar />
      <Cards />
    </>
  );
};

export default MainPage;
