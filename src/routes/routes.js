import { Route, Routes } from "react-router-dom";
import Login from "../pages/login";
import Home from "../pages/home";
import SeeArticles from "../pages/Articles/Articles";
import AddArticle from "../pages/Articles/Add";
import UserPage from '../pages/UserPage';

function RoutesApp() {
    return (
        <Routes>
            <Route path="*" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/Artigos" element={<SeeArticles />} />
            <Route path="/Artigos/Adicionar" element={<AddArticle />} />
            <Route path="/Usuarios" element={<UserPage />} />
        </Routes>
    )
}

export default RoutesApp; 
