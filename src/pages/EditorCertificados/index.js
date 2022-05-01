import React  from 'react'; 
import { TextArea} from './styled';
import  {ContainerPage} from "../../components/Main"

import Menu from '../../components/Menu';

const Editor = () => {

    return (
        <ContainerPage>
            <TextArea>
          <Menu/>
          <div className="container-area">
          <textarea id="textArea" name="textArea"  rows="4" cols="50" placeholder="Digite o texto do certificado..."></textarea>
          <button className="tagName">Add Tag “Nome”</button>
        <button className="save">Salvar texto!</button>
        <form>
                <div className="date-area">
                    <label className="date-des" for="dia">Informe a data do certificado: </label>
                    <input type="date" id="date" name="date"/>
                </div>
        </form>
         <button className="save">Salvar texto!</button>
            <hr className="line" />
            <h1>Lista de certificados:</h1>
            <hr className="line2" />
              </div>  
            <button className="salvarTodos">Salvar todos</button>
            <button className="addNew">Adicionar Novo</button>
            <div className="nameArea">
                <p className="name">Nome: </p>
                <hr className="line-vertical"/>
                <i class="bi bi-file-pdf-fill"></i>
                <p className="pdf">PDF</p>
            </div>
        </TextArea>
        </ContainerPage>
    );
  
  }
  
  export default Editor;
    