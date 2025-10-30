import React from 'react';
import Header from '../components/Header';
import './styles.css'; // your main CSS file

const Location = () => {
  return (
    <div>
      <Header />
      <div className="location_wrapper">
        <h2 className="location_title">Find Us</h2>
        <p>We meet on Monday evenings from 8:00 to 9:50 pm at St Albans United Reformed Church, Homewood Rd, St Albans AL1 4BH.
This is located at the corner of Homewood Road and Sandpit Lane.</p>
        <div className="location_map">
          <iframe
            title="Homewood Rd, St Albans"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2480.956326893123!2d-0.3143753!3d51.7600709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48763ec9061c2c7f%3A0x123088ee13a8f454!2sHomewood%20Rd%2C%20St%20Albans%20AL1%204BH!5e0!3m2!1sen!2suk!4v1709130481885!5m2!1sen!2suk"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Location;
