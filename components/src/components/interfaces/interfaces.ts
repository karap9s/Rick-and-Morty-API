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
};

export type SearchProps = {
  updateData: (value: string) => void;
};
