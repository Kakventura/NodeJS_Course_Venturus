//import style from './Botao.module.css';

const Botao = (props) => {
    const {texto, tipo = "primario", ...OutrasProps} = props;
    return(
        <button tipo={tipo} {...OutrasProps}>
           {texto} 
        </button>
    )
};

export {Botao};