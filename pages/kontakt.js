import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMapMarkerAlt, faEnvelope, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Navbar from '@/components/Navbar';
import Sidebar from '../components/Sidebar'
import Navbar2 from '@/components/Navbar2';
import Footer from '@/components/Footer';
import Footer2 from '@/components/Footer2';
import React, { useState } from 'react';

const ContactPage = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div>
      
        <Navbar />
        <Sidebar pageWrapId={"page-wrap"} outerContainerId={"Home"} />
        <Navbar2 />
        <div>
            <div className="testimonials-row2">
                <div className="testimonial-container">
                    <div className="brushed-title-container-cover">
                        <h2 className="brushi">Kontaktirajte nas</h2>
                    </div>
                </div>
            </div>
        
        <div className="testimonial-container">
        
        <div className="contact-row">
          {/* Phone Number */}
          <div className="contact-item">
            <FontAwesomeIcon className="contact-icon" icon={faPhone} />
            <h3 className="contact-title">Kontakt</h3>
            <p className="contact-text">+385 95 514 0331</p>
          </div>

          {/* Address */}
          <div className="contact-item">
            <FontAwesomeIcon className="contact-icon" icon={faMapMarkerAlt} />
            <h3 className="contact-title">Adresa</h3>
            <p className="contact-text">Fra Grge Martića 5, Solin</p>
          </div>

          {/* Email */}
          <div className="contact-item">
            <FontAwesomeIcon className="contact-icon" icon={faEnvelope} />
            <h3 className="contact-title">Email</h3>
            <p className="contact-text">info@instrukcije.com</p>
          </div>
        </div>


        {/* Contact form */}
        <div className="testimonials-row3">
                <div className="testimonial-container">
                    <div className="brushed-title-container-cover">
                        <h2 className="brush">Pošaljite upit</h2>
                    </div>
                </div>
            </div>
          <div className="form-container">
            <form className="contact-form">
              {/* Add form fields for name, email, question, etc. */}
              <label htmlFor="name">Ime:</label>
              <input type="text" id="name" name="name" />

              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" />

              <label htmlFor="question">Vaše pitanje:</label>
              <textarea id="question" name="question" rows="4" />

              <button className="button-55" type="submit">Pošalji</button>
            </form>
          </div>
        
      </div>
      <Footer2 />
      <Footer />
    </div></div>
  );
};

export default ContactPage;


