import { useAppContext } from '../../hooks';
import style from './ListaTarefas.module.css';
import { ListaTarefasItens } from './ListaTarefasItens';

const ListaTarefas = () => {
    const { tasks } = useAppContext();

    return (
        <ul className={style.ListaTarefas}>
            {!tasks.length && (
                <p> Não há tarefas cadastradas...</p>
            )}
            {tasks.map(item => (
                <ListaTarefasItens 
                    key={item.id} 
                    id={item.id} 
                    tarefa={item.tarefa}
                />
            ))}
        </ul>
    );
};

export { ListaTarefas };
