import React  from 'react'; 
import {  } from './styled';
import  {ContainerPage, TitlePage } from "../../components/Main"
import Menu from '../../components/Menu';
import Search from '../../components/Search';

const Home = () => {

  return (
    <ContainerPage>     
     {/* <TitlePage>Seja Bem-vindo!</TitlePage> */}
    
    <Menu/>
    <Search/>
    </ContainerPage>
  );

}

export default Home;
