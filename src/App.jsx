import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Titulo from './components/Titulo/Titulo';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContailner';

function App() {
  return (
    <BrowserRouter>
        <NavBar />
        <Titulo />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path='/product/:category' element={<ItemListContainer />} />
        </Routes>
    </BrowserRouter>
    
  );
}

export default App;