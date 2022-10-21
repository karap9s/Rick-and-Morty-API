import { ICards } from 'components/interfaces/interfaces';
import React, { useState } from 'react';
import Cards from './cards/cards';
import Modal from './modal/modal';
import Search from './searchBar/searchBar';
import styles from './mainPage.module.css';

const MainPage: React.FC = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [card, setCard] = useState<ICards>({} as ICards);

  const handleQueryChange = (name: string) => {
    setName(name);
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
      <Search updateData={handleQueryChange} />
      <Cards handleModal={handleModal} query={name} />
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
    </div>
  );
};

export default MainPage;
