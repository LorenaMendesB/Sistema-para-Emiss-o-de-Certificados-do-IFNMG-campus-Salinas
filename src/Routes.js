import React from "react";
import { Switch, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Eventos from "./pages/Eventos" 
import Modelos from "./pages/Modelos"
import Login from "./pages/Login";
export default () => {

    return(

        <Routes>
             <Route path="/Login" element={<Login />} />
             <Route path="/Home" element={<Home />} />
             <Route path="/Eventos" element={<Eventos />} />
             <Route path="/Modelos" element={<Modelos />} />

        </Routes>

    );
}