// Aplicativo visual (quando coloca "npm run dev" no terminal)
/*
Remoção de importações não utilizadas
  import { useState } from 'react'
  import reactLogo from './assets/react.svg'
  import viteLogo from '/vite.svg'
*/
import './App.css';
import {Cabecalho, Conteudo, Rodape} from './components'; // Redução do caminho do import
import {Inicial} from './pages'; // Importação do componente Inicial

const App = () => {

  return (
  
    //Alteração - 2° Modulo - Uso de componentes
    //Devemos agrupar os elementos por meio de um termo chamado "fragmento (fragment)"
    <>
      <Cabecalho nomeUsuario="Karinne"/>

      {/* Por meio da propriedade "children" o componente Conteudo pode receber outros elementos JSX */}
      <Conteudo>
        <Inicial/>
      </Conteudo>
      <Rodape usuario="Angelo"/>
    </>
  )


  
};

// Adição de ponto e vírgula no final da linha
export {App};
