import React from 'react';
import './AppartementHeader.scss';
import starColor from "../assets/star_color.png";
import starGrey from "../assets/star_grey.png";

function AppartementHeader(props) {
  const ratingNumber = parseInt(props.rating);
  const stars = Array.from({ length: 5 }, (_, index) => (
    <img
      key={index}
      src={index < ratingNumber ? starColor : starGrey}
      alt={index < ratingNumber ? "star" : "empty-star"}
    />
  ));

  return (
    <div className='appartement-all'>
      <div className="appartmentpage-title">
        <div className='appartement-name'>
          <h2>{props.title}</h2>
          <p>{props.location}</p>
        </div>
        <div className="appartementpage-subtiltle">
          {props.tags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>
      </div>
      <div className='appartement-profil'>
        <div className='appartement-badge'>
          <p>{props.host.name}</p>
          <img src={props.host.picture} alt="" />
        </div>
        <div className='appartement-stars'>
          {stars}
        </div>
      </div>
    </div>
  );
}

export default AppartementHeader;