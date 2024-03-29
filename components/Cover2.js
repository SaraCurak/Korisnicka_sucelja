import React from 'react';
import icon1 from '../public/images/icon1.png';
import icon2 from '../public/images/icon2.png';
import icon3 from '../public/images/icon3.png';
import icon4 from '../public/images/icon4.png';
import Link from 'next/link';

const Cover2 = () => {
  return (
    
    <div className="cover2-container"><div className="box">
      <div className="brushed-title-container-cover">
        <h2 className="brushw">Zajedno do znanja</h2>
      </div>
      <div className="cover2-text">
        <p>
          Uz individualni pristup naši učenici stječu samopouzdanje, pospješuju vještine i poboljšavaju ocjene.
        </p>
        <p>
          Prije susreta, naši instruktori se uvijek pripreme temeljem tvojih napomena. Također, uvijek ti je dostupan isti instruktor za online instrukcije koji prati tvoj napredak i upoznat je s tvojim potrebama, bez obzira da li pohađaš osnovnu školu, srednju školu ili fakultet.
        </p>
      </div>
      <div className="icon-container">
        <div className="icon">
        
        <Link href="/predmeti"><img src={icon1.src} alt="Icon 1" /></Link>
          <h3>Popravljanje ocjena</h3>
          
        </div>
        <div className="icon">
        <Link href="/predmeti">
          <img src={icon2.src} alt="Icon 2" /></Link>
          <h3>Priprema mature</h3>
        </div>
        <div className="icon">
        <Link href="/predmeti">
          <img src={icon3.src} alt="Icon 3" /></Link>
          <h3>Pomoć pri učenju</h3>
        </div>
        <div className="icon">
        <Link href="/predmeti">
          <img src={icon4.src} alt="Icon 4" /></Link>
          <h3>Napredni program</h3>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Cover2;
