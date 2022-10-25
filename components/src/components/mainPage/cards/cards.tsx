import { getFilterCharacters } from 'components/api/api';
import { MainContext } from 'components/context/context';
import { CardsProps, ICards } from 'components/interfaces/interfaces';
import { Loader } from 'components/loader/loader';
import React, { useContext, useEffect, useState } from 'react';
import NoneCards from '../noneCards/noneCards';
import styles from './cards.module.css';

const Cards: React.FC<CardsProps> = (props: CardsProps) => {
  const [cards, setCards] = useState<ICards[]>([]);
  const [isCardsLoading, setCardsLoading] = useState<boolean>(false);
  const [query, setQuery] = useState<string>('');
  const [type, setType] = useState<string>('name');
  const [gender, setGender] = useState<string>('');
  const [status, setStatus] = useState<string>('');

  const msg = useContext(MainContext);

  useEffect(() => {
    async function call() {
      setCardsLoading(true);
      setType(props.type);
      setQuery(props.query);
      setGender(props.gender);
      setStatus(props.status);
      setCards(await getFilterCharacters(type, query, status, gender));
      setCardsLoading(false);
    }

    call();
  }, [props.query, query]);

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
              <button
                onClick={() => {
                  props.handleModal(true, {
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
                  scrollToTop();
                }}
                className={styles.more}
              >
                Show More
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cards;
