import React from 'react';
import NavBar from '../layout/NavBar';
import "../pages/Homepage.scss";
import Banner from '../components/Banner.jsx';
import Appartment from "../components/Appartment.jsx";
import Main from "../layout/Main.jsx";
import Footer from "../layout/Footer.jsx";

function Homepage() {
  return (
    <div>
      
      <Main>
        <Banner />
        <Appartment />
      </Main>
      
    </div>
  );
}

export default Homepage;
