import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import  {ContainerPage} from '../../../src/components/main';
import Menu from '../../components/Menu';
import { CertfCard } from '../../components/certfCards';
import './styled.css'
import api from '../../api';

const Home = () => {
  const [eventos, setEventos] = useState();
  useEffect(() => {
    api
      .get("eventos/?format=json")
      .then((response) => setEventos(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);
    return (
      <div className='telaHome'>     
        <Menu className='menu'/>
        <div className='conteudo'>
          <div className='cabecalho'>
            <p className='eventoTitle'>Eventos:</p>
            <button className='botaoCriarNovo'><Link className='link' to='/Editor'>Criar Novo</Link></button>
          </div>
          <div className='gridCards'>
            { eventos?.map( (item, index) => (
              <Link to={'/Editor/' + item.id}>
                <CertfCard  title={item.titulo.substring(0, 20)+(item.titulo.length > 20 ? '...' : '')} date={item.edicao}/>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
}

export default Home;
