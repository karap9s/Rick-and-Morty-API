import { TAction, TActionKind, TReducer } from './interfaces/interfaces';

export const initialState: TReducer = {
  page: JSON.parse(localStorage.getItem('page') || JSON.stringify(1)),
};

export const reducer = (state: TReducer = initialState, action: TAction) => {
  switch (action.type) {
    case TActionKind.increment:
      return { page: state.page + action.payload };
    case TActionKind.decrement:
      return { page: state.page - action.payload };
    case TActionKind.customPage:
      return { page: action.payload };
    default:
      throw new Error();
  }
};
