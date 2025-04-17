import style from './ListaTarefasItens.module.css';
import { Botao, TIPOS_BOTAO } from '../../Botao';

const ListaTarefasItens = (props) => {
    const {tarefa} = props;
    return (
        <li className={style.ListaTarefasItens}> 
                {tarefa}
                <Botao texto="-" tipo={TIPOS_BOTAO.PRIMARIO} />
        </li>
    );
};
export { ListaTarefasItens };
