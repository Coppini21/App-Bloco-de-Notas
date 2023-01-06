import { Routes, Route } from "react-router-dom";

import Main from "./pages/Main";
import Home from "./pages/Main/Home";
import Armazenamento from "./pages/Main/Armazenamento";

export default function AppRoutes(){
    return(
        <Routes>
            <Route path='/' element={<Main />}>
                <Route path="/" element={<Home />} />
                <Route path="armazenamento/:id" element={<Armazenamento />} />
            </Route>
        </Routes>
    )
}