import { Formulario, ListaTarefas } from '../../components';
import style from './Inicio.module.css';

const Inicio = () => {
    return (
        <div className={style.Inicio}>
            <Formulario />
            <ListaTarefas />
        </div>
       
    )
};

export {Inicio}