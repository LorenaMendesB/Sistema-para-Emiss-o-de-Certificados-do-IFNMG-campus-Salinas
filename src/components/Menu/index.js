import React from 'react';
import { AreaMenu } from './styled';
import { Link } from 'react-router-dom';
function Menu() {

    return (

        
        <AreaMenu>
            <div className="container">

                <div className="logo">
                    Logo
                </div>
                <div className= "line"/>

                <nav>
                    <ul>
                       <li><Link to='/'>Página Inicial</Link></li> 
                        <li><Link to='/Templates'>Templates</Link></li>
                        <li><Link to='/Certificados'>Certificados</Link></li>
                        <p className="logout">Sair</p>
                    </ul>
                </nav>

            </div>


        </AreaMenu>
        
    );
}

export default Menu;