import React, { useEffect, useState } from 'react'
import "./Appartment.scss";
import Location from "./Location.jsx"



function Appartment() {
  const [appartments, setAppartments] = useState([]);

  useEffect(fetchAppartment, []);


  function fetchAppartment() {
    fetch("data.json")
    .then((res) => res.json())
    .then((res) => {console.log("res",res) 
      setAppartments(res)})
    .catch(console.error);
  }
  return (
    <div className='cardsContainer'>
        {appartments.map((appartement) => (
          <Location key={appartement.id} title={appartement.title} imageUrl={appartement.cover} id={appartement.id} />
        ))}
    </div>
   

  )
}

export default Appartment