import React from 'react';
import Header from '../components/Header';
import './styles.css';
import programmeImg from '../assets/programme.jpg'; 
import './styles.css';

const Programme = () => {
  return (
    <div>
      <Header />
      <div className="page_container">
        <div className="page_box">
          <h2>Autumn Term 2025</h2>
          <p>8th September to 8th December</p>
          <p>Half term 27th October</p>
          <p>Sectional 13th October</p>
          <h3>Programme</h3>
          <p>Vorisek - Symphony in D major</p>
          <p>Saint-Saens - Bacchanale</p>
          <p>Fauré - Pavane</p>

        </div>

        <div className="page_image">
          <img src={programmeImg}/>
        </div>
      </div>
    </div>
  );
};

export default Programme;
