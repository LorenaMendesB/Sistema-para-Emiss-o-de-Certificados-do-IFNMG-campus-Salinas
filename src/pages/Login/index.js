
   
import React from 'react';
import Menu from '../../components/Menu';
import { AreaLogin,TextTitle, Label,  } from './styled';
import { BtnEnter } from '../../components/Styled'
function Login() {

    return(
        
        <AreaLogin>
   
        <TextTitle>DEX</TextTitle>
        <form>
            
            <Label>Usuário:</Label> 
            <i class="bi bi-person-fill"></i> 
            <input id="user" type="user" name="user" placeholder="Digite o usuario do administrador.."/>
     
       </form>
        

       <form>
            <Label>
            Senha: </Label> 
           
                <i class="bi bi-lock-fill"></i>
             <input id="password" type="password" name="password" placeholder="Digite o usuario do administrador.."/>
        
       </form>
        <BtnEnter>
        Acessar
         </BtnEnter>
        </AreaLogin>
       
    );
}
export default Login;