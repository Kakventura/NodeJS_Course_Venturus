// Aplicativo visual (quando coloca "npm run dev" no terminal)
/*
Remoção de importações não utilizadas
  import { useState } from 'react'
  import reactLogo from './assets/react.svg'
  import viteLogo from '/vite.svg'
*/
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Router } from './Router';
import { AppContextProvider } from './context';

const App = () => {

  return (
    <AppContextProvider>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </AppContextProvider>
  );
};

// Adição de ponto e vírgula no final da linha
export { App };

