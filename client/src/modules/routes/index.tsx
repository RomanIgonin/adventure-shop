import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '@src/modules/home/ui';
import Articles from '@src/modules/articles/ui';

export const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/articles', element: <Articles /> },
]);
