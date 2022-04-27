import React, { userState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Home from './pages/Home';
import Routes from './Routes'
import './App.css';
function App() {

//  const [user, setUser] = userState(null);
//    if(user === null){
//    return(
//       <Login/>
//    );
//    }

  return (
    <BrowserRouter>
      {/* <Menu /> */}
    
      <Login/>
     <Routes />
      {/* <Footer /> */}
    </BrowserRouter>
  );


}

export default App;
