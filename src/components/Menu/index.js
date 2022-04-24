import React from 'react';
import { AreaMenu } from './styled';
import { Link } from 'react-router-dom';
function Menu() {

    return (

        
        <AreaMenu>
            <div className="container">
                <div className="logo">
                    Extensão
                </div>

                <nav>
                    <ul>
                       <li><Link to='/'>Home</Link></li> 
                        <li><Link to='/Templates'>Templates</Link></li>
                        <li><Link to='/Certificados'>Certificados</Link></li>
                        <li className="logout"><a href='#'>Sair</a></li>
                    </ul>
                </nav>

            </div>


        </AreaMenu>
        
    );
}

export default Menu;