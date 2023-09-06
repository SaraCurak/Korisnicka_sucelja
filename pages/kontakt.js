import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMapMarkerAlt, faEnvelope, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Navbar from '@/components/Navbar';
import Navbar2 from '@/components/Navbar2';
import Footer from '@/components/Footer';
import React, { useState } from 'react';

const ContactPage = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div>
      
        <Navbar />
        <Navbar2 /><div className="testimonial-container">
        <h2 className="contact-main-title">Kontaktirajte nas</h2>
        
        <div className="contact-row">
          {/* Phone Number */}
          <div className="contact-item">
            <FontAwesomeIcon className="contact-icon" icon={faPhone} />
            <h3 className="contact-title">Phone Number</h3>
            <p className="contact-text">123-456-7890</p>
          </div>

          {/* Address */}
          <div className="contact-item">
            <FontAwesomeIcon className="contact-icon" icon={faMapMarkerAlt} />
            <h3 className="contact-title">Address</h3>
            <p className="contact-text">123 Main St, City, Country</p>
          </div>

          {/* Email */}
          <div className="contact-item">
            <FontAwesomeIcon className="contact-icon" icon={faEnvelope} />
            <h3 className="contact-title">Email</h3>
            <p className="contact-text">info@example.com</p>
          </div>
        </div>


        {/* Contact form */}
          <div className="form-container">
            <h2>Pošaljite upit</h2>
            <form className="contact-form">
              {/* Add form fields for name, email, question, etc. */}
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" />

              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" />

              <label htmlFor="question">Your Question:</label>
              <textarea id="question" name="question" rows="4" />

              <button className="button-55" type="submit">Submit</button>
            </form>
          </div>
        
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;


