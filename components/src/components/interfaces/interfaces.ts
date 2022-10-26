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

export type TMainContext = {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
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
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
