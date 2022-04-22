import React from 'react';
import { AreaMenu } from './styled';
function Menu() {

    return (

        
        <AreaMenu>
            <div className="container">
                <div className="logo">
                    Extensão
                </div>

                <nav>
                    <ul>
                       <li><a href='#'>Home</a></li> 
                        <li><a  href='#'>Templates</a></li>
                        <li><a href='#'>Certificados</a></li>
                    </ul>
                </nav>

            </div>


        </AreaMenu>
        
    );
}

export default Menu;