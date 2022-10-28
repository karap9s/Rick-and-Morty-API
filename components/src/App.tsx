import React, { useState } from 'react';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import NotFound from 'components/notFound/notFound';
import MainPage from 'components/mainPage/mainPage';
import About from 'components/about/about';
import Header from 'components/header/header';
import Form from 'components/form/form';
import { FormContext, MainContext } from 'components/context/context';
import { ICards } from 'components/interfaces/interfaces';
import Modal from 'components/mainPage/modal/modal';

function App() {
  const [name, setName] = useState<string>('');
  const [type, setType] = useState<string>('name');
  const [card, setCard] = useState<ICards>({} as ICards);
  const [gender, setGender] = useState<string>('');
  const [status, setStatus] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [pagesCount, setPagesCount] = useState(0);
  const [nope, setNope] = useState('');

  return (
    <MainContext.Provider
      value={{
        page,
        setPage,
        gender,
        setGender,
        status,
        setStatus,
        name,
        setName,
        type,
        setType,
        card,
        setCard,
        pagesCount,
        setPagesCount,
      }}
    >
      <FormContext.Provider value={{ nope }}>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/form" element={<Form />} />
          <Route path="/info" element={<Modal />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace={true} />} />
        </Routes>
      </FormContext.Provider>
    </MainContext.Provider>
  );
}

export default App;
