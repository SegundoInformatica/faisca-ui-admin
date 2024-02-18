import { Route, Routes } from "react-router-dom";
import Login from "../pages/login";
import Home from "../pages/home";

function RoutesApp() {
    return (
        <Routes>
            <Route path="*" element={<Login />} />
            <Route path="/home" element={<Home />} />
        </Routes>
    )
}

export default RoutesApp; 
