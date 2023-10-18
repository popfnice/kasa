import React, { useEffect, useState } from 'react';
import "../style/appartementpage.scss";
import AppartementDescription from '../../components/AppartementDescription';
import AppartementBanner from '../../components/AppartementBanner';
import AppartementHeader from '../../components/AppartementHeader';
import { useLocation } from 'react-router-dom';

function AppartementPage() {
  const location = useLocation();
  const [selectedFlat, setSelectedFlat] = useState(null);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((flats) => {
        const flat = flats.find((flat) => flat.id === location.state.appartementId);
        setSelectedFlat(flat);
      })
      .catch(console.error);
  }, [location.state.appartementId]);

  return (
    <div className="appartement-page">
      {selectedFlat && (
        <>
          <AppartementBanner pictures={selectedFlat.pictures} />
          <AppartementHeader title={selectedFlat.title} location={selectedFlat.location} tags={selectedFlat.tags} host={selectedFlat.host} rating={selectedFlat.rating} />
          <AppartementDescription description={selectedFlat.description} equipments={selectedFlat.equipments} />
        </>
      )}
    </div>
  );
}

export default AppartementPage;
