import React  from 'react'; 
import {  } from './styled';
import  {ContainerPage, TitlePage } from "../../components/Main"
import Menu from '../../components/Menu';
import CardView from '../../components/CardView';
const Home = () => {

  return (
    <ContainerPage>     
     {/* <TitlePage>Seja Bem-vindo!</TitlePage> */}
    
    <Menu/>
    <CardView />
    </ContainerPage>
  );

}

export default Home;
