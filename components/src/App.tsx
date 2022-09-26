import React from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import NotFound from 'components/notFound/notFound';
import MainPage from 'components/mainPage/mainPage';
import About from 'components/about/about';
import Cards from 'components/cards/cards';

function App() {
  return (
    <>
      <header>
        <Link to="/">Home</Link>
        <Link to="/cards">Cards</Link>
        <Link to="/about">About</Link>
      </header>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
