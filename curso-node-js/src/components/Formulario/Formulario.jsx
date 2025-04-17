import { CampoTexto, Botao, TIPOS_BOTAO} from "../../components";
import style from './Formulario.module.css';

const Formulario = () => {
    return (
        <form className={style.Formulario}>
            <CampoTexto/>
            <Botao texto="+" tipo={TIPOS_BOTAO.SECUNDARIO} />
        </form>
    )
};

export { Formulario };
