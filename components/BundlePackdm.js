import React from 'react';

function BundlePackdm() {
  return (
    <div className="backgroundp">
    <div className="pricing-topic-container">
      <h2 className="pricing-topic-container-title"> DRŽAVNA MATURA </h2>
      <div className="containerp">
        <div className="panel pricing-table">
          <PricingPlan
            imgSrc="https://s22.postimg.cc/8mv5gn7w1/paper-plane.png"
            header="15 SATi"
            features={[
              'Prilagodljiv raspored',
              'Brže napredovanje uz osobnu pažnju',
            ]}
            price="200€"
          />
          
          <PricingPlan
            imgSrc="https://s28.postimg.cc/ju5bnc3x9/plane.png"
            header="25 sati"
            features={[
              'Dublje razumijevanje sadržaja',
              'Intenzivna podrška pri učenju',
            ]}
            price="250€"
            isFeatured={true}
          />
          <PricingPlan
            imgSrc="https://s21.postimg.cc/tpm0cge4n/space-ship.png"
            header="40 sati"
            features={[
              'Dostupno za manje grupe',
              'Djeljenje znanja i iskustva',
            ]}
            price="300€"
          />
        </div>
      </div>
      </div>
    </div>
  );
}

function PricingPlan({ imgSrc, header, features, price, isFeatured }) {
  return (
    <div className={`pricing-plan ${isFeatured ? 'is-featured' : ''}`}>
        <div className="pricing-img-container">
      <img src={imgSrc} alt="" className="pricing-img" /></div>
      <h2 className="pricing-header">{header}</h2>
      <ul className="pricing-features">
        {features.map((feature, index) => (
          <li className="pricing-features-item" key={index}>
            {feature}
          </li>
        ))}
      </ul>
      <span className="pricing-price">{price}</span>
      <a href="#/" className="button-55">
        {isFeatured ? 'Rezerviraj' : 'Rezerviraj'}
      </a>
    </div>
  );
}

export default BundlePackdm;
