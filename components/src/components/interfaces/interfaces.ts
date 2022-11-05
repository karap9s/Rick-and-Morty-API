import { store } from '../redux/rootReducer';

export interface ICards {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  creater: string;
  isOpen?: boolean;
  modalHandler?: (value: boolean) => void;
}

export interface IFormCards {
  name: string;
  surname: string;
  birthDate: string;
  avatar: string;
  country: string;
  key: string;
  accept?: boolean;

  nameError?: boolean;
  surnameError?: boolean;
  birthDateError?: boolean;
  avatarError?: boolean;
  countryError?: boolean;
  acceptError?: boolean;

  disabled?: boolean;
}

export type TState = { cards: ICards[]; isOpen?: boolean; isCardsLoading?: boolean };

export type CardsProps = {
  query: string;
  type: string;
  status: string;
  gender: string;
  handleModal: (dataValue: ICards) => void;
};

export type SearchProps = {
  updateData: (value: string, name: string, gender: string, status: string) => void;
};

export type TSeries = {
  name: string;
  date: string;
  episode: string;
  key: string;
};

export type TCheckedStatus = {
  any: boolean;
  alive: boolean;
  dead: boolean;
  unknown: boolean;
};

export type TCheckedGender = {
  any: boolean;
  male: boolean;
  female: boolean;
  genderless: boolean;
  unknown: boolean;
};

export type TEpisodes = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
};

export type TMainContext = {
  // page: number;
  // setPage: React.Dispatch<React.SetStateAction<number>>;
  gender: string;
  setGender: React.Dispatch<React.SetStateAction<string>>;
  status: string;
  setStatus: React.Dispatch<React.SetStateAction<string>>;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  type: string;
  setType: React.Dispatch<React.SetStateAction<string>>;
  card: ICards;
  setCard: React.Dispatch<React.SetStateAction<ICards>>;
  // pagesCount: number;
  // setPagesCount: React.Dispatch<React.SetStateAction<number>>;
  currentCharacter: string;
  setCurrentCharacter: React.Dispatch<React.SetStateAction<string>>;
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
};

export type TFormContext = {
  accept: boolean;
  setAccept: React.Dispatch<React.SetStateAction<boolean>>;
  disabled: boolean;
  setDisabled: React.Dispatch<React.SetStateAction<boolean>>;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  storage: IFormCards[];
  setStorage: React.Dispatch<React.SetStateAction<IFormCards[]>>;
  nameError: boolean;
  setNameError: React.Dispatch<React.SetStateAction<boolean>>;
  surnameError: boolean;
  setSurnameError: React.Dispatch<React.SetStateAction<boolean>>;
  birthError: boolean;
  setBirthError: React.Dispatch<React.SetStateAction<boolean>>;
  avatarError: boolean;
  setAvatarError: React.Dispatch<React.SetStateAction<boolean>>;
  acceptError: boolean;
  setAcceptError: React.Dispatch<React.SetStateAction<boolean>>;
};

export interface IMainReducer {
  main: {
    page: number;
    gender: string;
    status: string;
    name: string;
    type: string;
    card: ICards;
    pagesCount: number;
    currentCharacter: string;
    active: string;
  };
}

export type TGetPages = {
  type: string;
  name: string;
  status: string;
  gender: string;
};

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
