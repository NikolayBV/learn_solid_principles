import React from 'react';
import Header from "../components/header";
import Footer from "../components/footer";
import Auth from "../components/auth";

const Authorization = () => {
  return (
    <div>
      <Header/>
        <Auth/>
      <Footer/>
    </div>
  );
};

export default Authorization;