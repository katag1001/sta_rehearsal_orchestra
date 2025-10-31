import React from 'react';
import Header from '../components/Header';
import './styles.css';
import contactImg from '../assets/contact.jpg'; 
import './styles.css';

const Contact = () => {
  return (
    <div>
      <Header />
      <div className="page_container">
        <div className="page_box">
          <h2>Further Information</h2>
          <p>Email the secretary: staeroenquiry@gmail.com</p>


        </div>

        <div className="page_image">
          <img src={contactImg}/>
        </div>
      </div>
    </div>
  );
};

export default Contact;
