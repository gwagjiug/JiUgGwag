// App.tsx
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Theme } from './styles/theme';
import GlobalStyle from './styles/global';
import { RouterProvider } from 'react-router-dom';
import router from './routes/Router';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
