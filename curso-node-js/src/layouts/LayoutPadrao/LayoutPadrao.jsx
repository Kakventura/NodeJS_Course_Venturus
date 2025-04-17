import { Outlet } from "react-router-dom";
import { Cabecalho, Conteudo, Rodape } from "../../components";
import { useContext } from "react";
import { AppContext } from "../../context";
import { useAppContext } from "../../hooks";


const LayoutPadrao = () => {
    const { criador } = useAppContext();
    return (
        <>
            <Cabecalho nomeUsuario="Karinne"/> 

            {/* Por meio da propriedade "children" o componente Conteudo pode receber outros elementos JSX */}
            <Conteudo>
                {/* Serve para mostrar o conteúdo da rota escolhida */}
                <Outlet/>
            </Conteudo>
            <Rodape criador={criador}/> 
        </>
    );
};
export {LayoutPadrao};