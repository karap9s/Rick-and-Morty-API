import React from 'react';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import NotFound from 'components/notFound/notFound';
import MainPage from 'components/mainPage/mainPage';
import About from 'components/about/about';
import Header from 'components/header/header';
import Form from 'components/form/form';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/form" element={<Form />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace={true} />} />
      </Routes>
    </>
  );
}

export default App;
