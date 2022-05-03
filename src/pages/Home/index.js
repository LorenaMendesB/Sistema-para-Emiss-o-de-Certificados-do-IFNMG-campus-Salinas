import React, {useEffect, useStates} from 'react';
import { Link } from 'react-router-dom';
import Menu from '../../components/Menu';
import { CertfCard } from '../../components/certfCards';
import './styled.css'
//import api from '../../api';

const Home = () => {
  
 /* 
 console.log(api.get('eventos'));
  const [eventos, setEventos] = useStates([]);
  useEffect(() => {
    api.get('eventos').then(({data}) => { 
      setEventos(data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(eventos);
  */
    return (
      <div className='telaHome'>     
        <Menu className='menu'/>
        <div className='conteudo'>
          <div className='cabecalho'>
            <p className='eventoTitle'>Eventos:</p>
            <button className='botaoCriarNovo'><Link className='link' to='/Editor'>Criar Novo</Link></button>
          </div>
          <div className='gridCards'>
            <CertfCard title='Teste' date='15/05/2022'/>
            <CertfCard title='Evento 2' date='15/05/2022'/>
            <CertfCard title='Salinas Acelera' date='19/12/2022'/>
            <CertfCard title='Teste5' date='15/05/2022'/>
            <CertfCard title='Analise' date='15/05/2022'/>
            <CertfCard title='Eventos Brasil' date='15/05/2022'/>
          </div>
        </div>
      </div>
    );
}

export default Home;
