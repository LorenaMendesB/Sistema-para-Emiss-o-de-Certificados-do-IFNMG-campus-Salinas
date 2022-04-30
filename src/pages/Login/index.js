import React from 'react';
import Menu from '../../components/Menu';
import { AreaLogin } from './styled';
import { BtnEnter } from '../../components/Styled'
function Login() {

    return(
        
        <AreaLogin>
   
        <h1>DEX</h1>
        <form>
            <div className="form-user">
            <label>Usuário:</label> </div> 
            <i class="bi bi-person-fill"></i> 
            <input id="user" type="user" name="user" placeholder="Digite o usuario do administrador.."/>
     
       </form>
        

       <form>
            <div className="form-user">
            <label>Senha:</label> </div> 
           
                <i class="bi bi-lock-fill"></i>
             <input id="password" type="password" name="password" placeholder="Digite a senha do administrador.."/>
        
       </form>
        <BtnEnter>
         <div className="center">Acessar</div> 
         </BtnEnter>
         <p className="footerLogin">Esqueceu sua senha?</p>
        </AreaLogin>
       
    );
}
export default Login;