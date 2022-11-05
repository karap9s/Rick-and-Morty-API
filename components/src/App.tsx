import React, { useEffect, useState } from 'react';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import NotFound from 'components/notFound/notFound';
import MainPage from 'components/mainPage/mainPage';
import About from 'components/about/about';
import Header from 'components/header/header';
import Form from 'components/form/form';
import { IFormCards, IMainReducer } from 'components/interfaces/interfaces';
import Modal from 'components/mainPage/modal/modal';
import { Provider } from 'react-redux';
import { store } from './components/redux/rootReducer';
import { useAppSelector } from './hooks';

function App() {
  const gender = useAppSelector((state: IMainReducer) => state.main.gender);
  const status = useAppSelector((state: IMainReducer) => state.main.status);
  const page = useAppSelector((state: IMainReducer) => state.main.page);
  const active = useAppSelector((state: IMainReducer) => state.main.active);
  // Form Context

  const [accept, setAccept] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [count, setCount] = useState(0);
  const [storage, setStorage] = useState<IFormCards[]>(
    JSON.parse(localStorage.getItem('formStorage') || JSON.stringify([] as IFormCards[]))
  );

  const [nameError, setNameError] = useState(false);
  const [surnameError, setSurnameError] = useState(false);
  const [birthError, setBirthError] = useState(false);
  const [avatarError, setAvatarError] = useState(false);
  const [acceptError, setAcceptError] = useState(false);

  useEffect(() => {
    localStorage.setItem('gender', gender);
    localStorage.setItem('status', status);
    localStorage.setItem('page', JSON.stringify(page));
    localStorage.setItem('activePage', active);
    localStorage.setItem('formStorage', JSON.stringify(storage));
  });

  return (
    // <MainContext.Provider
    //   value={{
    //     // page,
    //     // setPage,
    //     gender,
    //     setGender,
    //     status,
    //     setStatus,
    //     name,
    //     setName,
    //     type,
    //     setType,
    //     card,
    //     setCard,
    //     // pagesCount,
    //     // setPagesCount,
    //     currentCharacter,
    //     setCurrentCharacter,
    //     active,
    //     setActive,
    //   }}
    // >
    //   <FormContext.Provider
    //     value={{
    //       accept,
    //       setAccept,
    //       disabled,
    //       setDisabled,
    //       count,
    //       setCount,
    //       storage,
    //       setStorage,
    //       nameError,
    //       setNameError,
    //       surnameError,
    //       setSurnameError,
    //       birthError,
    //       setBirthError,
    //       avatarError,
    //       setAvatarError,
    //       acceptError,
    //       setAcceptError,
    //     }}
    //   >
    <Provider store={store}>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/form" element={<Form />} />
        <Route path="/info" element={<Modal />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace={true} />} />
      </Routes>
    </Provider>
    // </FormContext.Provider>
    // </MainContext.Provider>
  );
}

export default App;
