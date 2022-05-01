import React  from 'react'; 
import { TextArea} from './styled';
import  {ContainerPage} from "../../components/Main"

import Menu from '../../components/Menu';

const Editor = () => {

    return (
        <ContainerPage>
            <TextArea>
          <Menu/>
          <div className="TextArea">
          <textarea id="textArea" name="textArea"  rows="4" cols="50" placeholder="Digite o texto do certificado..."></textarea>
          <button className="tagName">Add Tag “Nome”</button>
              <button className="save">Salvar texto!</button>
            <hr className="line"/>
            <h1>Lista de certificados:</h1>
            <hr className="line2"/>
              </div>  
            <button className="salvarTodos">Salvar todos</button>
            <button className="addNew">Adicionar Novo</button>
        </TextArea>
        </ContainerPage>
    );
  
  }
  
  export default Editor;
    