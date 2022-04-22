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
                        <li>Home</li>
                        <li>Templates</li>
                        <li>Certificados</li>
                    </ul>
                </nav>

            </div>


        </AreaMenu>

    );
}

export default Menu;