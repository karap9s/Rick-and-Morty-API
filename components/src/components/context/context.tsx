import { TMainContext } from 'components/interfaces/interfaces';
import { createContext } from 'react';

export const MainContext = createContext<TMainContext>({} as TMainContext);

export const FormContext = createContext('');
