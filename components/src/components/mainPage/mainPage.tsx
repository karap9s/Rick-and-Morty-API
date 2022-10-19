import React, { useState } from 'react';
import Cards from './cards/cards';
import Modal from './modal/modal';
import Search from './searchBar/searchBar';

const MainPage: React.FC = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [name, setName] = useState('');

  const handleQueryChange = (name: string) => {
    setName(name);
  };

  return (
    <>
      <Search updateData={handleQueryChange} />
      <Cards query={name} />
      {/* <Modal /> */}
    </>
  );
};

export default MainPage;
