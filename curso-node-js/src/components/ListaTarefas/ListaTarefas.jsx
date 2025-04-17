import { useAppContext } from '../../hooks';
import style from './ListaTarefas.module.css';
import { ListaTarefasItens } from './ListaTarefasItens';

const ListaTarefas = () => {
    const {tasks} = useAppContext(); 
    // Renderização de uma lista de tarefas
    return (
        <ul className={style.ListaTarefas}>
            {tasks.map(item => {
                <ListaTarefasItens 
                    key={item.id} 
                    id={item.id} 
                    tarefa={item.tarefa}
                />}
                )
            }
        </ul>
    )
};
export { ListaTarefas };