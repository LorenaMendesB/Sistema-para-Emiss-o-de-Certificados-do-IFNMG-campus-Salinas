import React from 'react';
import { AreaLogin, TextTitle, Label,  } from './styled';
import { BtnEnter } from '../../components/Styled'
import { Link } from 'react-router-dom';


function Login() {
    return(
        <AreaLogin>
   
        <TextTitle>DEX</TextTitle>
        <form>
            
            <Label>Usuário:</Label> 
            <i className="bi bi-person-fill"></i> 
            <input id="user" type="user" name="user" placeholder="Digite o usuario do administrador.."/>
     
       </form>
        

       <form>
            <Label>
            Senha: </Label> 
           
                <i className="bi bi-lock-fill"></i>
             <input id="password" type="password" name="password" placeholder="Digite o usuario do administrador.."/>
        
       </form>
        <BtnEnter><Link to='/Home'>Acessar</Link></BtnEnter>
        </AreaLogin>
       
    );
}
export default Login;