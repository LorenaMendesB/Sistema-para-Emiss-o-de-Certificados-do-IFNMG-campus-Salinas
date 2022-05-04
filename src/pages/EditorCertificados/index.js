import React  from 'react'; 
import { TextArea} from './styled';
import  {ContainerPage} from '../../../src/components/Main';
import "../../controller/manipulaPDF.js";
import Menu from '../../components/Menu';
import { NomeLabel } from '../../components/nomeLabel';


const Editor = () => {

    return (
      <ContainerPage>
        <Menu/>
        <TextArea>
          <div className="container-area">
          <form>
                <div className="divLabels">
                    <label className="text" for="text">Informe o título do certificado: </label>
                    <input className='inputText' type="text" id="text-name" name="text" maxlength="100" placeholder="Exemplo: Palestra sobre educação ambiental..."/>
                </div>
          </form>
          <form>
            <div className="divLabels">
                <label className="date-des text" for="dia">Informe a data do certificado: </label>
                <input className='inputText' type="text" id="text" name="text" maxlength="100" placeholder="Exemplo: 27 de dezembro de 2021"/>
            </div>
          </form>
          <div className="divLabels">
            <textarea id="textArea" name="textArea"  rows="4" cols="50" placeholder="Digite o texto do certificado..."></textarea>
          </div>
          <button className="tagName">Add Tag “Nome”</button>
          <button className="save">Salvar texto!</button>
          <hr className="line-1" />
          <h1>Lista de certificados:</h1>
          <hr className="line2" />
            </div>  
          <div className='botoes'>
            <button className="salvarTodos">Salvar todos</button>
            <button className="addNew">Adicionar Novo</button>
          </div>
          <NomeLabel name='Joaquim dos santos'/>
          <NomeLabel name='Antonio Barbosa'/>
          <NomeLabel name='José Antunes'/>
          <NomeLabel name='Maria Aparecida'/>
          <NomeLabel name='Fabio Santos'/>
          <NomeLabel name='Mateus Silva'/>
          <NomeLabel name='Joao'/>
        </TextArea>
      </ContainerPage>
    );
  
  }
  
  export default Editor;
    