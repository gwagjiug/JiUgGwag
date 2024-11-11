import React from 'react';
import './App.css';
import 'normalize.css';
import Main from './pages/Main';
import { ThemeProvider } from 'styled-components';
import { theme } from './style/theme';
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Main />
      </ThemeProvider>
    </>
  );
}

export default App;
