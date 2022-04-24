import React from "react";
import { Switch, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Templates from "./pages/Templates" 
import Certificados from "./pages/Certificados"
export default () => {

    return(

        <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/Templates" element={<Templates />} />
             <Route path="/Certificados" element={<Certificados />} />
             <Route path="/" element={<Home />} />

        </Routes>

    );
}