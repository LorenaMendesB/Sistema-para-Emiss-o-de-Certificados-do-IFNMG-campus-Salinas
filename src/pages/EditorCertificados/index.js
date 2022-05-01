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
          <textarea id="textArea" name="textArea" rows="4" cols="50"></textarea>
          <button className="tagName">Add Tag “Nome”</button>
              <button className="save">Salvar texto!</button>
            
              </div>  
        </TextArea>
        </ContainerPage>
    );
  
  }
  
  export default Editor;
    