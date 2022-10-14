import { getAllCharacters, getFilterCharacters } from 'components/api/api';
import { ICards, TState } from 'components/interfaces/interfaces';
import React, { Component } from 'react';
import Search from '../searchBar/searchBar';
import styles from './cards.module.css';

class Cards extends Component<Record<string, never>, TState> {
  query: string;
  arr: ICards[];
  isLoad: boolean;

  constructor(props: Record<string, never>) {
    super(props);

    this.state = {
      cards: [],
    };

    this.query = localStorage.getItem('search') || '';
    this.arr = [];
    this.isLoad = false;
  }

  async componentDidMount(): Promise<void> {
    if (!this.isLoad) {
      for (let i = 1; i < 43; i++) {
        const cards: ICards[] = await getAllCharacters(i);
        this.arr.push(...cards);
      }
      this.setState({ cards: this.arr.filter((el) => el.name.includes(this.query)) });

      this.isLoad = true;
    }
  }

  // async componentDidMount(): Promise<void> {
  //   // const arr = [];
  //   if (this.isLoad) {
  //     if (this.query === '') {
  //       for (let i = 1; i < 43; i++) {
  //         const cards: ICards[] = await getAllCharacters(i);
  //         this.arr.push(...cards);
  //       }
  //     } else {
  //       const cards: ICards[] = await getFilterCharacters(this.query);
  //       this.arr.push(...cards);
  //     }
  //     this.setState({ cards: this.arr });
  //   }
  //   this.isLoad = true;
  // }

  // async componentDidMount(): Promise<void> {
  //   for (let i = 1; i < 43; i++) {
  //     const cards: ICards[] = await getAllCharacters(i);
  //     this.arr.push(...cards);
  //   }
  //   this.setState({ cards: this.arr.filter((el) => el.name.includes(this.query)) });
  // }

  updateData = (value: string): void => {
    this.query = value;
    // this.setState({ cards: [] });
    this.setState({ cards: this.arr.filter((el) => el.name.includes(this.query)) });
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.search_wrapper}>
          <Search updateData={this.updateData} />
        </div>
        <div className={styles.cards_wrapper}>
          {this.state.cards.map((card: ICards) => (
            <div className={styles.card} key={card.id}>
              <img className={styles.image} src={card.image} alt={card.name} />
              <h1 className={styles.name}>{card.name}</h1>
              <h3 className={styles.species}>Species: {card.species}</h3>
              <h3 className={styles.gender}>Gender: {card.gender}</h3>
              <h3 className={styles.gender}>Status: {card.status}</h3>
              <button className={styles.more}>Show More</button>
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
