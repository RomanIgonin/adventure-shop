import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '@src/modules/navbar/ui';
import HomePage from '@src/modules/home/ui';
import { StyleSheetManager } from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';
import CatalogPage from '@src/modules/catalog/ui';
import ArticlesPage from '@src/modules/articles/ui';
import GuestPage from '@src/modules/guests/ui';
import AuthPage from '@src/modules/auth/ui';
import authStore from '@src/modules/auth/store';
import navBarStore from '@src/modules/navbar/store';
import UDText from '@src/modules/ud-ui/ud-text';
import ArticlePage from 'src/modules/articles/ui/article-page';
import ProductCardPage from '@src/modules/catalog/ui/product-card';
import CartPage from '@src/modules/cart/ui';
import cartStore from '@src/modules/cart/store';
import FaqPage from '@src/modules/faq/ui';
import faqStore from '@src/modules/faq/store';

function App() {
  const { auth } = authStore;
  const { changeActiveBtn } = navBarStore;
  const { getCartProducts } = cartStore;
  const { getFaq } = faqStore;

  const errTitle = 'ЗАПРАШИВАЕМОЙ СТРАНИЦЫ НЕ СУЩЕСТВУЕТ';

  useEffect(() => {
    reloadPage();
  }, []);

  const reloadPage = async () => {
    const activeBtn = await localStorage.getItem('activeBtn');
    if (activeBtn) {
      changeActiveBtn(activeBtn);
    }
    const token = await localStorage.getItem('token');
    if (token) {
      await auth();
      await getCartProducts();
    }
    await getFaq();
  };

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
            <Route path="/cart" element={<CartPage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/catalog/:id" element={<ProductCardPage />} />
            <Route path="/articles" element={<ArticlesPage />} />
            <Route path="/articles/:id" element={<ArticlePage />} />
            <Route path="/guests" element={<GuestPage />} />
            <Route path="/faq/:id" element={<FaqPage />} />
          </Route>
          <Route
            path="*"
            element={
              <UDText
                title={errTitle}
                size={32}
                weight={700}
                style={{ display: 'flex', justifyContent: 'center', marginTop: 200 }}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </StyleSheetManager>
  );
}

export default App;
