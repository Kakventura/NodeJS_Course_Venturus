import style from './ListaTarefas.module.css';
import { ListaTarefasItens } from './ListaTarefasItens';

const ListaTarefas = () => {
    // Criação de uma array de tarefas
    // Listagem dinamica de tarefas
    const tasks =[
        {id: 1, tarefa: 'Item 01'},
        {id: 2, tarefa: 'Item 02'},
        {id: 3, tarefa: 'Item 03'},
    ];

    // Renderização de uma lista de tarefas
    return (
        <ul className={style.ListaTarefas}>
            {tasks.map(item => <ListaTarefasItens key={item.id} tarefa={item.tarefa}/>)}
        </ul>
    )
};
export { ListaTarefas };