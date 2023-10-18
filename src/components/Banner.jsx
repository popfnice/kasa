import React from 'react';
import './banner.scss';
import homeImage from '../assets/home.jpg'; // Utilisez le chemin relatif à partir du dossier du composant

function Banner() {
  return (
    <div className='banner'>
       <img src={homeImage} alt="" />
       <h1> Chez vous, Partout et Ailleurs </h1>
    </div>
  );
}

export default Banner;
