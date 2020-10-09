import React from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import { BrowserRouter, Routes,  Route  } from 'react-reouter-dom'

import {  } from 'reac';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
        <Header />
          <Routes>
            <Route  path="/" element={<Home />}/>
            <Route  />sss
          </Routes>
        <Footer />
      </BrowserRouter>s
    </div>
  );
}

export default App;
