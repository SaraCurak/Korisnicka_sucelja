
import { useState, useEffect } from 'react';
import Image from 'next/image';
import teacher2 from '../public/images/teacher2.png'
import pozadina from '../public/images/pozadina.jpg'


const Cover = () => {
    const [isClicked, setIsClicked] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);  

    useEffect(() => {
    }, []);
      
    const toggleModal = () => {
      setIsModalOpen(!isModalOpen);
      console.log(isModalOpen)
    };

    return (
    <div className="home-hero">
        <div className="home-hero-elements">
          <img src={teacher2.src} alt="teacher" className="teacher-image" />
          <div className="home-hero-content">
            <div className="home-hero-text">
              "Učenje nikada ne prestaje."
            </div>
            <div className="home-hero-button-container">
              <button className="button-55" onClick={toggleModal}>
                <span> Rezerviraj </span>
              </button>
            </div>
          </div>
        </div>
        
      {isModalOpen && (
        <div className={`main-modal ${isModalOpen ? 'modal-open' : ''}`}>
        <button className="close-modal" onClick={toggleModal}>
          X
        </button>
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
      )}
      </div>
    );
  };
            
export default Cover;