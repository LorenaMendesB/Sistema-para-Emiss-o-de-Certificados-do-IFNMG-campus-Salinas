import React from "react";
import { Switch, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Modelos from "./pages/Modelos" 
import Certificados from "./pages/Certificados"
import Login from "./pages/Login";
export default () => {

    return(

        <Routes>
             <Route path="/Login" element={<Login />} />
             <Route path="/" element={<Home />} />
             <Route path="/Modelos" element={<Modelos />} />
             <Route path="/Certificados" element={<Certificados />} />

        </Routes>

    );
}