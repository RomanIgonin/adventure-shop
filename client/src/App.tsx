import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '@src/modules/navbar/ui';
import HomePage from '@src/modules/home/ui';
import { StyleSheetManager } from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';
import CatalogPage from '@src/modules/catalog/ui';
import ArticlesPage from '@src/modules/articles/ui';
import GuestPage from '@src/modules/guests/ui';
import AuthPage from '@src/modules/auth/ui';

function App() {
  return (
    <StyleSheetManager
      enableVendorPrefixes
      shouldForwardProp={(propName, elementToBeRendered) => {
        return typeof elementToBeRendered === 'string' ? isPropValid(propName) : true;
      }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<HomePage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/articles" element={<ArticlesPage />} />
            <Route path="/guests" element={<GuestPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </StyleSheetManager>
  );
}

export default App;
