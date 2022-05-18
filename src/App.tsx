import React from 'react';
import './App.css';
import { About } from './component/About/About';
import { NavBar } from './component/NavBar/NavBar';
import { Shop } from './component/Shop/Shop';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from './component/Home/Home';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
