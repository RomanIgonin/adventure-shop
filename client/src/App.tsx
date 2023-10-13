import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from '@src/modules/routes';

function App() {
  return (
    <div>
      <RouterProvider router={router} />;
    </div>
  );
}

export default App;
