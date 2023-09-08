import React, { useState, useEffect } from 'react';
import logoSrc from '../public/images/logo5.png';
import { useRouter } from 'next/router';

const menuItemsList = [
  {
      name: 'Naslovnica',
      slug: '',
      isClicked: false
  },
  {
      name: 'Instruktori',
      slug: 'instruktori',
      isClicked: false
  },
  {
    name: 'Predmeti',
    slug: 'predmeti',
    isClicked: false
  },
  {
    name: 'Uputstva',
    slug: 'uputstva',
    isClicked: false
  },
  {
    name: 'Cjenik',
    slug: 'cjenik',
    isClicked: false
  },
  {
      name: 'FAQ',
      slug: 'faq',
      isClicked: false
  },
  {
      name: 'Kontakt',
      slug: 'kontakt',
      isClicked: false
  },
  {
      name: 'Pet Plus',
      slug: 'petplus',
      isClicked: false
  },
  
];

const Navbar = () => {
  const [menuItems, setMenuItems] = useState(menuItemsList);
  const [isClicked, setIsClicked] = useState(false);
  const [test123, setTest123] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);  
  const router = useRouter();

 useEffect(() => {

  console.log(logoSrc)

  let updatedMenuItems = menuItemsList.map(item => {
      if(item.slug == router.pathname.split('/').pop()) item.isClicked = true;
      return item;
  })

  setMenuItems(updatedMenuItems);
  setIsClicked(true);
}, [test123]);

const toggleModal = () => {
  setIsModalOpen(!isModalOpen);
  console.log(isModalOpen)
};

  return (
    <header>
      <nav className="navbar sticky-nav">

        <div className="box navbar-content">
          <div className="logo">
            <a href="/">
              <img src={logoSrc.src} alt="Logo" />
            </a>
          </div>
          <ul className="menu-items">
            {menuItems.map((item) => (
              <a href={item.slug} key={item.slug + item.name}>
                <li className={`menu-item ${item.isClicked ? "menu-item-clicked" : ""}`}>{item.name}</li>
              </a>
            ))}
          </ul>
          <div className="buttons-container">
              <button className="button-55" onClick={toggleModal}>
                <span> Rezerviraj </span>
              </button>
          </div>
        </div>
      </nav>
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
    </header>
  );
};

export default Navbar;
