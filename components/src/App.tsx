import React, { useEffect } from 'react';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import NotFound from 'components/notFound/notFound';
import MainPage from 'components/mainPage/mainPage';
import About from 'components/about/about';
import Header from 'components/header/header';
import Form from 'components/form/form';
import { IReducer } from 'components/interfaces/interfaces';
import Modal from 'components/mainPage/modal/modal';
import { Provider } from 'react-redux';
import { store } from './components/redux/rootReducer';
import { useAppSelector } from './hooks';

function App() {
  const gender = useAppSelector((state: IReducer) => state.main.gender);
  const status = useAppSelector((state: IReducer) => state.main.status);
  const page = useAppSelector((state: IReducer) => state.main.page);
  const active = useAppSelector((state: IReducer) => state.main.active);
  const storage = useAppSelector((state: IReducer) => state.form.storage);

  useEffect(() => {
    localStorage.setItem('gender', gender);
    localStorage.setItem('status', status);
    localStorage.setItem('page', JSON.stringify(page));
    localStorage.setItem('activePage', active);
    localStorage.setItem('formStorage', JSON.stringify(storage));
  });

  return (
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
  );
}

export default App;
