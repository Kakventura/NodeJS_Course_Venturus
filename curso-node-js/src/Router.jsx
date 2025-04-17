import { Route, Routes } from "react-router-dom";
import { Inicio, SobreNos } from './pages'; // Importa o componente de início
import { LayoutPadrao } from "./layouts";

// Componete padrão de rotas do React Router
const Router = () => {
    return (
        <Routes>
            {/* Rota mãe para englobar todas as outras */}
            <Route path ="/" element={<LayoutPadrao/>}> 
                <Route path="/" element={<Inicio/>} />
                <Route path="/sobre-nos" element={<SobreNos/>} />
            </Route>           
        </Routes>
    );
};
export {Router};