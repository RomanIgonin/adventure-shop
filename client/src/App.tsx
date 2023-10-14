import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '@src/modules/navbar/ui';
import HomePage from '@src/modules/home/ui';
import LoginPage from '@src/modules/auth/ui/login';
import RegistrationPage from '@src/modules/auth/ui/registration';

function App() {
  return (
    <div>
      <img
        src={require('@img/header-bg.jpg')}
        style={{ width: '100%', height: 100, objectFit: 'cover' }}
        alt={'header img'}
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/registration" element={<RegistrationPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
