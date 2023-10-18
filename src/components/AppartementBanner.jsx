import React, { useRef, useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './AppartementBanner.scss';
import arrowLeftImage from '../assets/arrow_left.png';
import arrowRightImage from '../assets/arrow_right.png';

function AppartementBanner(props) {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => {
      setCurrentSlide(next);
    },
  };

  const goToNextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const goToPrevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  useEffect(() => {
    setCurrentSlide(0);
  }, [props.pictures]);

  return (
    <div className='appartement-img'>
      <Slider {...settings} ref={sliderRef}>
        {props.pictures.map((picture, index) => (
          <div key={index}>
            <img src={picture} alt={`Picture ${index + 1}`} />
          </div>
        ))}
      </Slider>
      <div className="slide-counter">
        {currentSlide + 1}/{props.pictures.length}
      </div>
      <button className="slider-arrow slider-arrow-left" onClick={goToPrevSlide}>
        <img src={arrowLeftImage} alt="Previous" />
      </button>
      <button className="slider-arrow slider-arrow-right" onClick={goToNextSlide}>
        <img src={arrowRightImage} alt="Next" />
      </button>
    </div>
  );
}

export default AppartementBanner;
