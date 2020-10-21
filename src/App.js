import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Login from './Components/Login/Login';
import User from './Components/User/User';
import { UserStorage } from './UserContext';
import ProtectedRouter from './Components/Helper/ProtectedRouter';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
            <Routes>
              <Route  path="/" element={<Home />}/>
              <Route path="login/*" element={<Login />} />
              <ProtectedRouter path="conta/*" element={<User />} />
            </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
