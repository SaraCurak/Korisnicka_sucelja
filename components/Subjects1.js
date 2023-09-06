import React from 'react';
import girl from '../public/images/girl.png'
import girlb from '../public/images/girl-back.png'
import curvy from '../public/images/curvy-bottom.png'
import girl2 from '../public/images/girl22.png'


const Subjects1 = () => {
  return (
<div>
    <div className="testimonials-row2">
    <div className="testimonial-container">
        <div className="brushed-title-container-cover">
            <h2 className="brushi">Predmeti</h2>
        </div>
    </div>
</div>
    <div className="cover1-container">
      <div className="box">
        <div className="cover-content">
          <div className="cover-text">
            <p>
            Naša stručna ekipa predanih nastavnika nudi kvalitetne instrukcije iz matematike, fizike i kemije kako bismo vam pomogli ostvariti svoje školske ciljeve. Bez obzira jeste li u osnovnoj školi, srednjoj školi ili pripremate se za državnu maturu, mi smo tu da vam pružimo potrebnu podršku.
            </p>
            <p>Neovisno o vašem razrednom stupnju ili razini znanja, naši instruktori su tu da vas vode kroz svijet matematike, fizike i kemije. Zajedno ćemo ostvariti vaše školske ciljeve i pripremiti vas za uspješnu budućnost. </p>
            <p>
            Kontaktirajte nas danas kako biste započeli svoje putovanje prema znanju i uspjehu!
            </p>
          </div>
          <div className="cover-image">
            <img src={girl2.src}/>
          </div>
        </div>
      </div>
    </div></div>
  );
};

export default Subjects1;
