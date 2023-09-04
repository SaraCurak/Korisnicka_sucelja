import React, { useState, useEffect } from 'react';
import logoSrc from '../public/images/logo.png';
import { useRouter } from 'next/router';

const menuItemsList = [
  {
      name: 'home',
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
  }
];

const Navbar = () => {
  const [menuItems, setMenuItems] = useState(menuItemsList);
  const [isClicked, setIsClicked] = useState(false);
  const [test123, setTest123] = useState([]);
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
            <a href="/account">
              <button className="button-55">
                <span> Prijavi se </span>
              </button>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
