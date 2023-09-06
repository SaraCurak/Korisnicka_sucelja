import React from 'react';

const Pricelist = () => {
  return (
  <div class="price-list-container">

      <div className="box">
      <div className="price-list">
        <div className="price-item">
          <div className="col-lg-1 vertical-line-container">
            <div className="vertical-line"></div>
          </div>
          <div className="col-lg-6 offset-sm-1 middle-side">
            <h2>"Matematika- Ključ za Uspjeh u Školi i Životu</h2>
            <p>
              <strong>Postani pravi šampion!</strong> 
            </p>
            <p>
              S našim Šampion Paketom, dobit ćeš jedan sat privatnih instrukcija svaki tjedan. To znači da ćeš svaki tjedan imati priliku povećati svoje znanje i vještine.
            </p>
            <ul>
              <li>Brže napredovanje uz osobnu pažnju</li>
              <li>Prilagodljiv raspored</li>
              <li>Besplatni savjeti i trikovi</li>
            </ul>
          </div>
          <div className="col-lg-4 right-side">
            <div className="price">
              100€
            </div>
          </div>
        </div>
        
        <div className="price-item">
          <div className="col-lg-1 vertical-line-container">
            <div className="vertical-line"></div>
          </div>
          <div className="col-lg-6 offset-sm-1 middle-side">
            <h2>Paket 2 tjedno - "Brzi Napredak Paket"</h2>
            <p>
              <strong>Leti kroz izazove!</strong> 
            </p>
            <p>
              Naš Brzi Progres Paket nudi ti dvije satnice privatnih instrukcija svaki tjedan. Ubrzaj svoj napredak i postigni izvanredne rezultate.
            </p>
            <ul>
              <li>Intenzivna podrška i usmjerenost</li>
              <li>Prilika za dublje razumijevanje gradiva</li>
              <li>Personalizirani pristup</li>
            </ul>
          </div>         
          <div className="col-lg-4 right-side">
            <div className="price">
              100€
            </div>
          </div>
        </div>

        <div className="price-item">
          <div className="col-lg-1 vertical-line-container">
            <div className="vertical-line"></div>
          </div>
          <div className="col-lg-6 offset-sm-1 middle-side">
            <h2>Grupni Paket - "Timski Uspon"</h2>
            <p>
              <strong>Uči i rasti zajedno!</strong> 
            </p>
            <p>
              Grupni Paket je savršen za one koji vole učiti u timskom okruženju. Sudjeluj u grupnim satima s prijateljima i zajedno rastite.
            </p>
            <ul>
              <li>Djeljenje znanja i iskustva</li>
              <li>Poticanje međusobne podrške</li>
              <li>Dostupno za manje grupe</li>
            </ul>
          </div>
          <div className="col-lg-4 right-side">
            <div className="price">
              100€
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
  
  )
};

export default Pricelist;
