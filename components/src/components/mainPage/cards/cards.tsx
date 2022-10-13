import { getAllCharacters } from 'components/api/api';
import { ICards, TState } from 'components/interfaces/interfaces';
import React, { Component } from 'react';
import Search from '../searchBar/searchBar';
import styles from './cards.module.css';

class Cards extends Component<Record<string, never>, TState> {
  open: boolean;

  constructor(props: Record<string, never>) {
    super(props);

    this.state = {
      cards: [],
    };

    this.open = false;
  }

  async componentDidMount(): Promise<void> {
    const arr = [];
    for (let i = 1; i < 43; i++) {
      const cards: ICards[] = await getAllCharacters(i);
      arr.push(...cards);
    }
    this.setState({ cards: arr });
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.search_wrapper}>
          <Search />
        </div>
        <div className={styles.cards_wrapper}>
          {this.state.cards.map((card: ICards) => (
            <div className={styles.card} key={card.id}>
              <img className={styles.image} src={card.image} alt={card.name} />
              <h1 className={styles.name}>{card.name}</h1>
              <h3 className={styles.species}>Species: {card.species}</h3>
              <h3 className={styles.gender}>Gender: {card.gender}</h3>
              <h3 className={styles.gender}>Status: {card.status}</h3>
              <button onClick={() => console.log('1')} className={styles.more}>
                Show More
              </button>
              <dialog className={styles.details}>
                <h2>Heading</h2>
                <p>riiick</p>
              </dialog>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Cards;
