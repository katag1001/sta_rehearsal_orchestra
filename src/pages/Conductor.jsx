import React from 'react';
import Header from '../components/Header';
import './styles.css';
import darrenImg from '../assets/darren.jpg'; 
import './styles.css';

const Conductor = () => {
  return (
    <div>
      <Header />
      <div className="page_container">
        <div className="page_box">
          <h2>Darren Bloom</h2>
          <p>Darren Bloom has been our conductor since Sept 2023.</p>
          <p><a href="https://www.darrenbloom.com/about" target="_blank" rel="noopener noreferrer">
 Click here to go to Darren's web site
          </a></p>
           
        </div>

        <div className="page_image">
          <img src={darrenImg}/>
        </div>
      </div>
    </div>
  );
};

export default Conductor;
