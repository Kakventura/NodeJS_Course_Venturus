import style from './Conteudo.module.css';

const Conteudo = (props) => {

    // Children é uma propriedade especial do React que representa o conteúdo filho de um componente
    // Isso permite que você passe elementos JSX como filhos para o componente

    // Desestruturando props
    const { children } = props;
    
    
    return (
        <div className={style.Conteudo}>
            {children}
        </div>
    );
};

export {Conteudo};