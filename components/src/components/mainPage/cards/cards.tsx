import { getFilterCharacters } from 'components/api/api';
import { CardsProps, ICards } from 'components/interfaces/interfaces';
import { Loader } from 'components/loader/loader';
import React, { useEffect, useState } from 'react';
import styles from './cards.module.css';

// class Cards extends Component<Record<string, never>, TState> {
//   query: string;
//   arr: ICards[];
//   isLoad: boolean;
//   modalData: ICards;

//   constructor(props: Record<string, never>) {
//     super(props);

//     this.state = {
//       cards: [],
//       isOpen: false,
//       isCardsLoading: false,
//     };

//     this.query = localStorage.getItem('search') || '';
//     this.arr = [];
//     this.isLoad = false;
//     this.modalData = {
//       id: 0,
//       name: '',
//       status: '',
//       species: '',
//       type: '',
//       gender: '',
//       origin: {
//         name: '',
//         url: '',
//       },
//       location: {
//         name: '',
//         url: '',
//       },
//       image: '',
//       episode: [],
//       url: '',
//       creater: '',
//     };

//     this.modalHandler.bind(this);
//   }

//   async componentDidMount(): Promise<void> {
//     if (!this.isLoad) {
//       this.setState({ isCardsLoading: true });
//       for (let i = 1; i < 43; i++) {
//         const cards: ICards[] = await getAllCharacters(i);
//         this.arr.push(...cards);
//       }
//       this.setState({ cards: this.arr.filter((el) => el.name.includes(this.query)) });

//       this.isLoad = true;
//       this.setState({ isCardsLoading: false });
//     }
//   }

//   updateData = (value: string): void => {
//     this.query = value;
//     this.setState({ cards: this.arr.filter((el) => el.name.includes(this.query)) });
//   };

//   modalHandler = (value: boolean): void => {
//     this.setState({ isOpen: value });
//   };

//   modalOpen = (
//     id: number,
//     name: string,
//     status: string,
//     species: string,
//     type: string,
//     gender: string,
//     nameOrigin: string,
//     urlOrigin: string,
//     nameLocation: string,
//     urlLocation: string,
//     image: string,
//     episode: string[],
//     url: string,
//     creater: string
//   ) => {
//     this.modalData = {
//       id: id,
//       name: name,
//       status: status,
//       species: species,
//       type: type,
//       gender: gender,
//       origin: {
//         name: nameOrigin,
//         url: urlOrigin,
//       },
//       location: {
//         name: nameLocation,
//         url: urlLocation,
//       },
//       image: image,
//       episode: episode,
//       url: url,
//       creater: creater,
//     };
//   };

//   render() {
//     return (
//       <div className={styles.wrapper}>
//         <div className={styles.search_wrapper}>
//           <Search updateData={this.updateData} />
//         </div>
//         {this.state.isCardsLoading ? (
//           <Loader />
//         ) : (
//           <div className={styles.cards_wrapper}>
//             {this.state.cards.map((card: ICards) => (
//               <div className={styles.card} key={card.id}>
//                 <img className={styles.image} src={card.image} alt={card.name} />
//                 <h1 className={styles.name}>{card.name}</h1>
//                 <h3 className={styles.species}>Species: {card.species}</h3>
//                 <h3 className={styles.gender}>Gender: {card.gender}</h3>
//                 <h3 className={styles.gender}>Status: {card.status}</h3>
//                 <button
//                   onClick={() => {
//                     this.modalOpen(
//                       card.id,
//                       card.name,
//                       card.status,
//                       card.species,
//                       card.type,
//                       card.gender,
//                       card.origin.name,
//                       card.origin.url,
//                       card.location.name,
//                       card.location.url,
//                       card.image,
//                       card.episode,
//                       card.url,
//                       card.creater
//                     );

//                     this.modalHandler(true);
//                     window.scrollTo(0, 0);
//                   }}
//                   className={styles.more}
//                 >
//                   Show More
//                 </button>
//               </div>
//             ))}
//           </div>
//         )}
//         {this.state.isOpen && (
//           <Modal
//             id={this.modalData.id}
//             name={this.modalData.name}
//             status={this.modalData.status}
//             species={this.modalData.species}
//             type={this.modalData.type}
//             gender={this.modalData.gender}
//             origin={this.modalData.origin}
//             location={this.modalData.location}
//             image={this.modalData.image}
//             episode={this.modalData.episode}
//             url={this.modalData.url}
//             creater={this.modalData.creater}
//             modalHandler={this.modalHandler}
//           />
//         )}
//       </div>
//     );
//   }
// }

const Cards: React.FC<CardsProps> = (props: CardsProps) => {
  const [cards, setCards] = useState<ICards[]>([]);
  const [isCardsLoading, setCardsLoading] = useState<boolean>(false);
  const [query, setQuery] = useState<string>('');

  useEffect(() => {
    async function call() {
      setCardsLoading(true);
      setQuery(props.query);
      setCards(await getFilterCharacters(query));
      setCardsLoading(false);
    }

    call();
  }, [props.query, query]);

  return (
    <div className={styles.wrapper}>
      {isCardsLoading ? (
        <Loader />
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
                onClick={() =>
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
                  })
                }
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
