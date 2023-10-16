import React from 'react';
import './banner.scss';
import AboutPic from '../assets/about_pic.jpg'

function BannerWithoutH1() {
  return (
    <div className='banner'>
       <img src={AboutPic} alt="" />
    </div>
  );
}

export default BannerWithoutH1;
