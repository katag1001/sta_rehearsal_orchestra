import React from 'react';
import Header from '../components/Header';
import './styles.css';
import linkImg from '../assets/links.jpg'; 
import './styles.css';

const Links = () => {
  return (
    <div>
      <Header />
      <div className="page_container">
        <div className="page_box">
          <h2>Links to other web sites of interest</h2>
          
          <p><a href="https://stalbansurc.org/" target="_blank" rel="noopener noreferrer">
 Website of Homewood Rd Church
          </a></p>

          <p><a href="https://www.saro.org.uk/" target="_blank" rel="noopener noreferrer">
St Albans Rehearsal Orchestra (Wednesday Morning)
          </a></p>


          <p><a href="https://www.alorchestra.org/" target="_blank" rel="noopener noreferrer">
 Abbots Langley Orchestra
          </a></p>

          <p><a href="https://www.amateurorchestras.org.uk/" target="_blank" rel="noopener noreferrer">
 Amateur Orchestra Index
          </a></p>
           
        </div>

        <div className="page_image">
          <img src={linkImg}/>
        </div>
      </div>
    </div>
  );
};

export default Links;
