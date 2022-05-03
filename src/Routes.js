import React from "react";
import { Switch, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Editor from "./pages/EditorCertificados";
export default () => {
    return(
        <Routes>
             <Route path="/" element={<Login />} />
             <Route path="/Home" element={<Home />} />
             <Route path="/Editor" element={<Editor/>} />
        </Routes>

    );
}