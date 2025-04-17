import {TIPOS_BOTAO} from './constantes';
import style from './Botao.module.css';

const Botao = (props) => {
    const {texto, tipo = TIPOS_BOTAO.PRIMARIO, ...OutrasProps} = props;
    return(
        <button className={style.Botao} tipo={tipo} {...OutrasProps}>
           {texto} 
        </button>
    )
};

export {Botao};
