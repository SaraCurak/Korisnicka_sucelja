import React from 'react';
import icon1 from '../public/images/math.jpg'
import icon2 from '../public/images/psy.jpg'
import icon3 from '../public/images/chem.png'
import Link from 'next/link';

const Pricelist = () => {
  return (<div>

  <div class="price-list-container">

      <div className="box">
      <div className="price-list">
          <Link href="/kontakt">
        <div className="price-item">
          <div className="col-lg-1 vertical-line-container">
            <div className="vertical-line"></div>
          </div>
          <div className="col-lg-6 offset-sm-1 middle-side">
            <h2>Matematika - Ključ za uspjeh u školi i životu</h2>
            <p>
              <strong>Postani pravi šampion!</strong> 
            </p>
            <p>
            Nudimo instrukcije iz matematike prilagođene svim razinama obrazovanja, od osnovne škole do srednje škole i državne mature. Naši instruktori pristupaju matematici na način koji olakšava razumijevanje apstraktnih koncepta. Fokusiramo se na rješavanje problema i primjenu matematike u stvarnim situacijama.
            </p>
            <ul>
              <li>Logika i Računanje</li>
              <li>Geometrija i Algebra</li>
              <li>Besplatni savjeti i trikovi</li>
            </ul>
          </div>
          <div className="col-lg-4 right-side">
          <div className="icon-images">
              <img src={icon1.src} alt="Icon 1" />
            </div>
          </div>
        </div>
          </Link>
        
          <Link href="/kontakt">
        <div className="price-item">
          <div className="col-lg-1 vertical-line-container">
            <div className="vertical-line"></div>
          </div>
          <div className="col-lg-6 offset-sm-1 middle-side">
            <h2>Fizika - Razumijevanje zakona prirode</h2>
            <p>
              <strong>Leti kroz izazove!</strong> 
            </p>
            <p>
            Naši instruktori fizike pomoći će vam razumjeti osnovne zakone prirode i principima fizike. Bez obzira jeste li u osnovnoj školi, gimnaziji ili pripremate se za fakultet, prilagodit ćemo nastavu vašim potrebama. Istražujemo praktične primjene fizike kako bismo olakšali učenje.
            </p>
            <ul>
              <li>Priroda i Zakoni Svijeta</li>
              <li>Eksperimenti i Teorije</li>
              <li>Personalizirani pristup</li>
            </ul>
          </div>         
          <div className="col-lg-4 right-side">
            <div className="icon-images">
              <img src={icon2.src} alt="Icon 2" />
            </div>
          </div>
        </div>
        </Link>

        <Link href="/kontakt">
        <div className="price-item">
          <div className="col-lg-1 vertical-line-container">
            <div className="vertical-line"></div>
          </div>
          <div className="col-lg-6 offset-sm-1 middle-side">
            <h2>Kemija - Svijet atoma i molekula</h2>
            <p>
              <strong>Uči i rasti zajedno!</strong> 
            </p>
            <p>
            Kemija može biti zahtjevan predmet, ali uz naše instrukcije postat će vam razumljivija i zanimljivija. S naglaskom na praktičnim eksperimentima, naučit ćete o kemijskim reakcijama i svojstvima tvari. Pripremite se za državnu maturu ili jednostavno produbite svoje znanje kemije
            </p>
            <ul>
              <li>Elementi i Kemijske Reakcije.</li>
              <li>Poticanje međusobne podrške</li>
              <li>Laboratorijske Vještine.</li>
            </ul>
          </div>
          <div className="col-lg-4 right-side">
          <div className="icon-images">
              <img src={icon3.src} alt="Icon 3" />
            </div>
          </div>
        </div>
        </Link>
      </div>
      </div>
      </div></div>
  
  )
};

export default Pricelist;
