import style from './ListaTarefasItens.module.css';
import { Botao, TIPOS_BOTAO } from '../../Botao';
import { useAppContext } from '../../../hooks';

const ListaTarefasItens = (props) => {
    const {id, tarefa} = props;
    const { removerTask } = useAppContext();
    return (
        <li className={style.ListaTarefasItens}> 
                {tarefa}
                <Botao 
                    texto="-" 
                    tipo={TIPOS_BOTAO.PRIMARIO} 
                    onCLick={() => removerTask(id)}
                />
        </li>
    );
};
export { ListaTarefasItens };
