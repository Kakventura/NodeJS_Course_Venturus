// Aplicativo visual (quando coloca "npm run dev" no terminal)
/*
Remoção de importações não utilizadas
  import { useState } from 'react'
  import reactLogo from './assets/react.svg'
  import viteLogo from '/vite.svg'
*/
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import {Cabecalho, Conteudo, Rodape} from './components'; // Redução do caminho do import
import { Inicio } from './pages';
import { Router } from './Router';

const App = () => {

  return (
  
    //Alteração - 2° Modulo - Uso de componentes
    //Devemos agrupar os elementos por meio de um termo chamado "fragmento (fragment)"
    <BrowserRouter>
      <Router/>
      
    </BrowserRouter>

  );
};

// Adição de ponto e vírgula no final da linha
export {App};
