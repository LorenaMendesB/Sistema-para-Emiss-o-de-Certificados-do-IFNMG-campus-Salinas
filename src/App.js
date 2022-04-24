import React, { userState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Login from './components/Login';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Home from './pages/Home';
import Routes from './Routes'
import './App.css';
function App() {

  // const [user, setUser] = userState(null  //   id: 1,
  // //   name: 'Admin',
  // //  avatar: ' '

  // );

  // if(user === null){
  //   return(
  //     <Login/>
  //   );
  // }

  return (
    <BrowserRouter>
      <Menu />
     <Routes />
      <Footer />
    </BrowserRouter>
  );


}

export default App;
