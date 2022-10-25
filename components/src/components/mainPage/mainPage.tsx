import { ICards } from 'components/interfaces/interfaces';
import React, { useState } from 'react';
import Cards from './cards/cards';
import Modal from './modal/modal';
import Search from './searchBar/searchBar';
import styles from './mainPage.module.css';
import { MainContext } from 'components/context/context';

const MainPage: React.FC = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [type, setType] = useState<string>('name');
  const [card, setCard] = useState<ICards>({} as ICards);
  const [gender, setGender] = useState<string>('');
  const [status, setStatus] = useState<string>('');

  const handleQueryChange = (value: string, name: string, status: string, gender: string) => {
    setType(value);
    setName(name);
    setStatus(status);
    setGender(gender);
  };

  const handleModal = (openValue: boolean, dataValue: ICards) => {
    setOpen(openValue);
    setCard(dataValue);
  };

  const modalOpenChanger = (value: boolean) => {
    setOpen(value);
  };

  return (
    <div className={styles.wrapper}>
      <MainContext.Provider value={'main'}>
        <Search updateData={handleQueryChange} />
        <Cards handleModal={handleModal} query={name} type={type} status={status} gender={gender} />
        {isOpen && (
          <Modal
            id={card.id}
            name={card.name}
            status={card.status}
            species={card.species}
            type={card.type}
            gender={card.gender}
            origin={card.origin}
            location={card.location}
            image={card.image}
            episode={card.episode}
            url={card.url}
            creater={card.creater}
            modalHandler={modalOpenChanger}
          />
        )}
      </MainContext.Provider>
    </div>
  );
};

export default MainPage;
