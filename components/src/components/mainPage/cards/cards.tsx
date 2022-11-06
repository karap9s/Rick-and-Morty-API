import { getFilterCharacters, getPages } from 'components/api/api';
import { MainContext } from 'components/context/context';
import { ICards, TMainContext } from 'components/interfaces/interfaces';
import { Loader } from 'components/loader/loader';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NoneCards from '../noneCards/noneCards';
import styles from './cards.module.css';

const Cards: React.FC = () => {
  const [cards, setCards] = useState<ICards[]>([]);
  const [isCardsLoading, setCardsLoading] = useState<boolean>(false);

  const { gender, status, name, type, setCard, setPagesCount, setCurrentCharacter, state } =
    useContext<TMainContext>(MainContext);

  useEffect(() => {
    async function call() {
      setCardsLoading(true);
      setCards(await getFilterCharacters(type, name, status, gender, state.page));
      setCardsLoading(false);
      setPagesCount(await getPages(type, name, status, gender));
    }

    call();
  }, [name, type, status, gender, setPagesCount, state.page]);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className={styles.wrapper}>
      {isCardsLoading ? (
        <Loader />
      ) : cards === undefined ? (
        <NoneCards />
      ) : (
        <div className={styles.cards_wrapper}>
          {cards.map((card: ICards) => (
            <div className={styles.card} key={card.id}>
              <img className={styles.image} src={card.image} alt={card.name} />
              <h1 className={styles.name}>{card.name}</h1>
              <h3 className={styles.species}>Species: {card.species}</h3>
              <h3 className={styles.gender}>Gender: {card.gender}</h3>
              <h3 className={styles.gender}>Status: {card.status}</h3>
              <Link
                onClick={() => {
                  setCard({
                    id: card.id,
                    name: card.name,
                    status: card.status,
                    species: card.species,
                    type: card.type,
                    gender: card.gender,
                    origin: {
                      name: card.origin.name,
                      url: card.origin.url,
                    },
                    location: {
                      name: card.location.name,
                      url: card.location.url,
                    },
                    image: card.image,
                    episode: card.episode,
                    url: card.url,
                    creater: card.creater,
                    isOpen: true,
                  });
                  setCurrentCharacter(card.name);
                  scrollToTop();
                }}
                className={`${styles.card_link}`}
                to="/info"
              >
                <button className={styles.more}>About</button>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cards;
