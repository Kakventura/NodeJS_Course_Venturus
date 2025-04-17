import { createContext, useState } from "react";

export const AppContext = createContext({});

export const AppContextProvider = (props) => {

    const { children } = props;

    const [criador, setCriador] = useState('Angelo');

    const [tasks, setTasks] = useState(
        // Criação de uma array de tarefas
        // Listagem dinamica de tarefas
        [
            {id: 1, tarefa: 'Item 01'},
            {id: 2, tarefa: 'Item 02'},
            {id: 3, tarefa: 'Item 03'},
        ]
    );

    const adicionarTasks = (nomeTask) => {
        setTasks(estadoAtual => {
            const task = {
                id: estadoAtual.length + 1,
                tarefa: nomeTask // aqui o campo deve ser "tarefa" pra manter o mesmo formato do Inicio.jsx
            };
            return [...estadoAtual, task];
        });
    };

    const removerTask = (idTask) =>{
        setTasks(estadoAtual => {
            const tarefasFiltradas = estadoAtual.filter(item => item.id !== idTask);
            return (
                [
                ...tarefasFiltradas,
                ]
            );
        })
    };

    return (
        <AppContext.Provider value={{
            criador,
            tasks,
            adicionarTasks,
            removerTask,
        }}>
            {children}
        </AppContext.Provider>
    );
};