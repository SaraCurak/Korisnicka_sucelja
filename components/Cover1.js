import React from 'react';
import girl from '../public/images/girl.png'
import girlb from '../public/images/girl-back.png'
import curvy from '../public/images/curvy-bottom.png'


const Cover1 = () => {
  return (
    <div className="cover-container">
      <div className="brushed-title-container-cover">
        <h2 className="brush">Instrukcije 1 na 1</h2>
      </div>
      <div className="cover-content">
        <div className="cover-text">
          <p>
          Online instrukcije za popravljanje loših ocjena, pisanje zadaća, pomoć pri učenju, podizanje znanja na višu razinu ili pripremanje za polaganje državne mature.
          </p>
          <p>
          Naruči instrukcije kod odabranog instruktora iz matematike, fizike, kemije, informatike, elektrotehnike, mehanike, statistike ili računovodstva za samo jedan zadatak ili za cjelokupno gradivo.
          </p>
          <p>
          Naši instruktori su kvalificirani za pomoć pri svladavanju cijelog gradiva osnovne i srednje škole.

          </p>
        </div>
        <div className="cover-image">
        {/* <img src={girlb.src} alt="Background Image" className="cover-background-image" /> */}
          <img src={girl.src}/>
        </div>
        <img src={curvy.src} className="curvy-bottom"/>
      </div>
    </div>
  );
};

export default Cover1;
