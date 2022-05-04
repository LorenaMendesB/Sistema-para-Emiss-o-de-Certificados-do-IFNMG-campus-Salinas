import React from 'react';
import './styled.css';
import { Link } from 'react-router-dom';


function Login() {
    var inputs = {
        login: '',
        senha: ''
    }

    const logar = (usuarioLogin, usuarioSenha ) =>{
        if(usuarioLogin === 'admin' && usuarioLogin === 'admin'){
            return true
        }else{
            alert('Usuário ou senha inválida!');
            return false
        }
    }
    console.log(inputs);
    return(
        <div className='AreaMenu'>
        <h1 className='TextTitle'>DEX</h1>
            <form>
                <label className='label'>Usuário:</label>
                <div className='boxInputs'>
                    <i className="icons bi bi-person-fill"></i> 
                    <input className='textoInput' id="user" type="user" name="user" placeholder="Digite o usuario do administrador.."/>
                </div>
            </form>
            <form>
                <label className='label'>Senha: </label> 
                <div className='boxInputs'>
                    <i className="icons bi bi-lock-fill"></i>
                    <input className='textoInput' id="password" type="password" name="password" placeholder="Digite o senha do administrador.."/>
                </div>
            </form>
        <button className='buttonAcess'><Link to='/Home'>Acessar</Link></button>
        
        </div>
       
    );
}
export default Login;