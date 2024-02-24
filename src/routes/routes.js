import { Route, Routes } from "react-router-dom";
import Login from "../pages/login";
import Home from "../pages/home";
import SeeArticles from "../pages/Articles/Articles";
import AddArticle from "../pages/Articles/Add";

function RoutesApp() {
    return (
        <Routes>
            <Route path="*" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/Artigos" element={<SeeArticles />} />
            <Route path="/Artigos/Adicionar" element={<AddArticle />} />
        </Routes>
    )
}

export default RoutesApp; 
