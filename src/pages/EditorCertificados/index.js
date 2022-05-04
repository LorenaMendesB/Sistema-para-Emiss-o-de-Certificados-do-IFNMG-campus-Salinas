import React, {useEffect, useState}   from 'react'; 
import { TextArea, ContainerPage} from './styled';
import "../../controller/manipulaPDF.js";
import Menu from '../../components/Menu';
import { NomeLabel } from '../../components/nomeLabel';

import api from '../../api';


const Editor = () =>{
  var url = window.location.href;
  var id = url.split('/')[4];
  const [evento, setEvento] = useState();
  useEffect(() => {
    api
      .get("eventos/"+id+"/?format=json")
      .then((response) => setEvento(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);
  const [nomes, setNomes] = useState();
  useEffect(() => {
    api
      .get("nomes/?format=json")
      .then((response) => setNomes(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);
    let dados = {
      titulo:  '',
      localData: '',
      body: ''
    }
    if(evento != undefined){
    dados = {
        titulo: evento.titulo,
        localData: evento.localData,
        body: evento.texto
      }
    }
    return (
      <ContainerPage>
        <Menu/>
        <TextArea>
          <div className="container-area">
          <form>
                <div className="divLabels">
                    <label className="text" for="text">Informe o título do certificado: </label>
                    <input value={dados.titulo} className='inputText' type="text" id="text-name" name="text" maxlength="100" placeholder="Exemplo: Palestra sobre educação ambiental..."/>
                </div>
          </form>
          <form>
            <div className="divLabels">
                <label className="date-des text" for="dia">Informe a data do certificado: </label>
                <input value={dados.localData} className='inputText' type="text" id="text" name="text" maxlength="100" placeholder="Exemplo: 27 de dezembro de 2021"/>
            </div>
          </form>
          <div className="divLabels">
            <textarea value={dados.body} id="textArea" name="textArea"  rows="4" cols="50" placeholder="Digite o texto do certificado..."></textarea>
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
          <div>
            { nomes?.map( (item, index) => {
              return (item.evento_id === parseInt(id)) ?
                  <div>
                    <NomeLabel name={item.nome} texto={evento.texto} data={evento.localData}/>
                  </div> : console.log(item.evento_id)
                
            }
            )              
            }
          </div>
        </TextArea>
      </ContainerPage>
    );
  
  }
  
  export default Editor;
    