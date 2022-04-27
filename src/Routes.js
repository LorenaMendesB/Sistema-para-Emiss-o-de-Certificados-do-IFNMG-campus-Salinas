import React from "react";
import { Switch, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Modelos from "./pages/Modelos" 
import Certificados from "./pages/Certificados"
export default () => {

    return(

        <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/Modelos" element={<Modelos />} />
             <Route path="/Certificados" element={<Certificados />} />
             <Route path="/" element={<Home />} />

        </Routes>

    );
}