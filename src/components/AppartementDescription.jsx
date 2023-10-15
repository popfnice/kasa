import React from 'react';
import Collapse from '../components/Collapse';

function AppartementDescription(props) {
  return (
    <div className='accommodationCollapse '>
      <Collapse className='' title="Description" content={props.description} />
      <Collapse className='appartement-buttom' title="Équipements" content={props.equipments.map((equipment) => <p key={equipment}>{equipment}</p>)} />

    </div>
  );
}

export default AppartementDescription;
