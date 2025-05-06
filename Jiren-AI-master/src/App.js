import React from 'react';
import './App.css';
import Text from './Text/Text';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Intro from './Intro/Intro';
import Image from './Image/Image'
import About from './Contact/About';

const App = () => {
  return (
    
    <>

<BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/text" element={<Text />} />
        <Route path="/image" element={<Image />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
    

    </>

  );
};

export default App;
