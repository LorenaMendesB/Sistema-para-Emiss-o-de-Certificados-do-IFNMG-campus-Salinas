import React from 'react';
import { AreaMenu } from './styled';
import { Link } from 'react-router-dom'; //Instale com npm i react-router-dom
import "bootstrap-icons/font/bootstrap-icons.css"; //Instale com npm i bootstrap-icons
import logo from '../../assets/dexTitle.svg';


function Menu() {
    return (
        <AreaMenu>
            <div className="container">
                <div className="img">
                    <img src={logo} alt="Dex Certificados" className="logo"></img>
                </div>
                <div className="line" />
                <nav>
                    <ul>
                        <li><Link to='/Home'><i className="bi bi-house-fill"></i>Página Inicial</Link></li>
                       <li className='editorBottom'><Link to='/Editor'><i className="bi bi-pencil-square"></i>Editor</Link>
                        </li>
                    </ul>
                    <p className="logout"><i className="bi bi-box-arrow-right"></i><Link to="/">LogOut</Link></p>
                </nav>
            </div>
        </AreaMenu>
    );
}

export default Menu;