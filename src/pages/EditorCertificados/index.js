import React  from 'react'; 
import { TextArea} from './styled';
import  {ContainerPage} from '../../../src/components/main';
import "../../controller/manipulaPDF.js";
import Menu from '../../components/Menu';


const Editor = () => {

    return (
      <ContainerPage>
        <TextArea>
          <Menu/>
            <div className="container-area">
            <form>
                  <div className="name-area">
                      <label className="text" for="text">Informe o título do certificado: </label>
                      <input type="text" id="text-name" name="text" maxlength="100" placeholder="Exemplo: Palestra sobre educação ambiental..."/>
                  </div>
            </form>
            <form>
              <div className="date-area">
                  <label className="date-des" for="dia">Informe a data do certificado: </label>
                  <input type="text" id="text" name="text" maxlength="100" placeholder="Exemplo: 27 de dezembro de 2021"/>
              </div>
            </form>
            <textarea id="textArea" name="textArea"  rows="4" cols="50" placeholder="Digite o texto do certificado..."></textarea>
            <button className="tagName">Add Tag “Nome”</button>
            <button className="save">Salvar texto!</button>
            <button className="save">Salvar texto!</button>
            <hr className="line-1" />
            <h1>Lista de certificados:</h1>
            <hr className="line2" />
              </div>  
            <button className="salvarTodos">Salvar todos</button>
            <button className="addNew">Adicionar Novo</button>
            <div className="nameArea">
                <p className="name" maxlength="150">Nome: </p>
                <hr className="line-vertical"/>
                <div className="pdf-area">
                <i className="bi bi-file-pdf-fill"></i>
                <p className="pdf">PDF</p>     </div>
                <button className="delete"><i className="bi bi-trash3-fill"></i></button>
            </div>
          </TextArea>
      </ContainerPage>
    );
  
  }
  
  export default Editor;
    