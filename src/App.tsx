import React, {useState} from 'react';
import UsersList from "./components/usersList";
import Header from "./components/header";
import Footer from "./components/footer";


function App() {

  return (
    <div className="App">
        <Header/>
        <UsersList/>
        <Footer/>
    </div>
  );
}

export default App;
