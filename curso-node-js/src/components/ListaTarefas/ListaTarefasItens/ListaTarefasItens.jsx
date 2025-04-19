import style from './ListaTarefasItens.module.css';
import { Botao, TIPOS_BOTAO, CampoTexto } from '../../../components';
import { useAppContext } from '../../../hooks';
import { useState } from 'react';


const ListaTarefasItens = (props) => {
    const {id, tarefa} = props;

    const [estaEditando, setEstaEditando] = useState(false);

    const { editarTask, removerTask } = useAppContext();
    return (
        <li className={style.ListaTarefasItens}> 
            {estaEditando && (
                <CampoTexto 
                    defaultValue={tarefa}
                    onChange={ evento => editarTask(id,evento.target.value)}
                    onBlur={() => setEstaEditando(false)} 
                    autoFocus 
                />
            ) }
            {!estaEditando && (
                <span 
                    onDoubleClick={() => setEstaEditando(true)}>
                        {tarefa}
                </span>
            )}
            
                <Botao 
                    texto="-" 
                    tipo={TIPOS_BOTAO.PRIMARIO} 
                    onClick={() => removerTask(id)} 
                />
        </li>
    );
};
export { ListaTarefasItens };
