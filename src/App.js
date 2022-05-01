import React, { userState } from 'react';
import { BrowserRouter } from 'react-router-dom';
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
    
      {/* <Login/> */}
     <Routes />
     
    </BrowserRouter>
  );


}

export default App;
