import React from 'react';
import { AreaMenu } from './styled';
import { Link } from 'react-router-dom'; //Instale com npm i react-router-dom
import "bootstrap-icons/font/bootstrap-icons.css"; //Instale com npm i bootstrap-icons

function Menu() {

    return (


        <AreaMenu>
            <div className="container">

                <div className="logo">
                    Logo
                </div>
                <div className="line" />

                <nav>
                    <ul>
                        <li><i class="bi bi-house-fill"></i><Link to='/'>Página Inicial</Link></li>
                        <li><i class="bi bi-card-text"></i><Link to='/Certificados'>Certificados</Link></li>
                        <li><i class="bi bi-palette2"></i><Link to='/Modelos'>Modelos</Link></li>
                        <li><i class="bi bi-pencil-square"></i><Link to='/Editor'>Editor</Link>
                        </li>


                    </ul>
                    <p className="logout"><i class="bi bi-box-arrow-right"></i><Link to="/Logout"></Link>LogOut</p>
                </nav>

            </div>


        </AreaMenu>

    );
}

export default Menu;