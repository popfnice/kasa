import React from 'react';
import "../style/Homepage.scss";
import Banner from '../../components/Banner.jsx';
import Appartment from "../../components/Appartment.jsx";
import Main from "../../layout/Main.jsx";

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
