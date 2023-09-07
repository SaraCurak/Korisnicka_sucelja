import React from 'react';
import girl from '../public/images/girl.png'
import girlb from '../public/images/girl-back.png'
import curvy from '../public/images/curvy-bottom.png'
import pattern from '../public/images/pattern.png'
import icon1 from '../public/images/icon-box-1.png';
import icon2 from '../public/images/icon-box-2.png';
import icon3 from '../public/images/icon-box-3.png';
import icon4 from '../public/images/icon-box-4.png';

const Cover3 = () => {
  return (
    
    <div className="cover3-container"><div className="box">
      <div className="brushed-title-container-cover">
        <h2 className="brush">Vrhunski instruktori</h2>
      </div>
      <div className="cover-content">
        <div className="cover-text">
          <p>
            Kako bismo Vam omogućili vrhunsku uslugu instrukcija, zapošljavamo samo najbolje instruktore na području Hrvatske. U prosjeku samo 5% instruktora prođe našu temeljitu provjeru komunikativnosti, znanja i sposobnosti prijenosa istog.
          </p>
          <p>
            Mi smo odabrali najbolje za vas, zato da vi ne morate birati!
          </p>
          <button className="button-55">
            Instruktori
          </button>
        </div>
        <div className="circle3-image">
          <div className="circle3">
            <img src={pattern.src} alt="Rotating Image" className="rotating-image" />
                <div className="icon3-container">
                    <div className="icon3">
                        <img src={icon1.src} alt="Icon 1" />
                        <p>Kvalificirani</p>
                    </div>
                    <div className="icon3">
                        <img src={icon2.src} alt="Icon 1" />
                        <p>Motivirani</p>
                    </div>
                    <div className="icon3">
                        <img src={icon3.src} alt="Icon 1" />
                        <p>Stručni</p>
                    </div>
                    <div className="icon3">
                        <img src={icon4.src} alt="Icon 1" />
                        <p>Iskusni</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Cover3;
