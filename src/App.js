import React, { userState } from 'react';
import Login from './components/Login';
import Menu from './components/Menu';
import Footer from './components/Footer';
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
    <>
      <Menu />
<div> Paginas</div>
      <Footer />
    </>
  );

}

export default App;
