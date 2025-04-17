import { useState } from 'react';
import { CampoTexto, Botao, TIPOS_BOTAO } from "../../components";
import style from './Formulario.module.css';
import { useAppContext } from '../../hooks';

const Formulario = () => {
    const {adicionarTasks} = useAppContext(); 
    const [nomeTask, setNomeTask] = useState('');

    const onChangeNomeTask = (event) => {
        setNomeTask(event.currentTarget.value);
    };

    const submeterForm = (event) => {
        event.preventDefault();
        if (!nomeTask) return;

        adicionarTasks(nomeTask);

        setNomeTask('');
    };

    return (
        <form className={style.Formulario} onSubmit={submeterForm}>
            <CampoTexto 
                value={nomeTask} 
                onChange={onChangeNomeTask}
            />
            <Botao texto="+" tipo={TIPOS_BOTAO.SECUNDARIO} />
        </form>
    );
};

export { Formulario };
