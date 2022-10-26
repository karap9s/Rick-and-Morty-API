import { ICards } from 'components/interfaces/interfaces';
import React, { useState } from 'react';
import Cards from './cards/cards';
import Modal from './modal/modal';
import Search from './searchBar/searchBar';
import styles from './mainPage.module.css';
import { MainContext } from 'components/context/context';
import Pagination from './pagination/pagination';

const MainPage: React.FC = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [type, setType] = useState<string>('name');
  const [card, setCard] = useState<ICards>({} as ICards);
  const [gender, setGender] = useState<string>('');
  const [status, setStatus] = useState<string>('');
  const [page, setPage] = useState<number>(1);

  return (
    <div className={styles.wrapper}>
      <MainContext.Provider
        value={{
          page,
          setPage,
          gender,
          setGender,
          status,
          setStatus,
          name,
          setName,
          type,
          setType,
          card,
          setCard,
          isOpen,
          setOpen,
        }}
      >
        <Search />
        <Cards />
        <Pagination />
        {isOpen && <Modal />}
      </MainContext.Provider>
    </div>
  );
};

export default MainPage;
