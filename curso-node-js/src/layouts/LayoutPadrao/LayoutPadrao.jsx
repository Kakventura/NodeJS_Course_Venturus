import { Outlet } from "react-router-dom";
import { Cabecalho, Conteudo, Rodape } from "../../components";


const LayoutPadrao = () => {
    return (
        <>
            <Cabecalho nomeUsuario="Karinne"/> 

            {/* Por meio da propriedade "children" o componente Conteudo pode receber outros elementos JSX */}
            <Conteudo>
                {/* Serve para mostrar o conteúdo da rota escolhida */}
                <Outlet/>
            </Conteudo>
            <Rodape usuario="Angelo"/> 
        </>
    );
};
export {LayoutPadrao};