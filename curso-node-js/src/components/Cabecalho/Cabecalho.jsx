// Importando do css do componente
import { Link } from 'react-router-dom';
import style from './Cabecalho.module.css';

// 'props" é abreviação de propriedades e é utilizada essa linguagem no react
// props é um objeto que contém todas as propriedades passadas para o componente
const Cabecalho = (/*props*/) => {

    // Para evitar repetição de variáveis (props.alguma_coisa), podemos utilizar o destructuring
    //const {nomeUsuario} = props; // Desestruturação de objetos
    return (
        <div className={style.Cabecalho}>
            <Link to="/">
                <h1>
                    <span>ToDo </span> 
                    List
                </h1>
            </Link>
            {/*
            }
                Bem vindo ao meu site!
                <h1>Olá, {nomeUsuario}!</h1>
            */}
            {/* Comentário em JSX */}
            {/* props irá receber o nome do usuário a ser recebido */}
            {/* retirada do objeto props. e apenas o nome da variável */}
            
            <Link to="/sobre-nos">Sobre Nós</Link>
        </div>
    )
};

// Exportando o componente Cabecalho para ser utilizado em outros arquivos
// O export default permite que o componente seja importado com qualquer nome em outros arquivos
export /*default*/{Cabecalho};