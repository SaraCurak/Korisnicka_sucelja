import React from 'react';
import Link from 'next/link';

function BundlePack() {
  return (
    <div className="backgroundp">
      <div className="pricing-topic-container">
        <h2 className="pricing-topic-container-title"> OSNOVNA I SREDNJA ŠKOLA </h2>
      <div className="containerp">
        <div className="panel pricing-table">
          <PricingPlan
            imgSrc="https://s22.postimg.cc/8mv5gn7w1/paper-plane.png"
            header="1 SAT tjedno"
            features={[
              'Prilagodljiv raspored',
              'Brže napredovanje uz osobnu pažnju',
            ]}
            price="50€"
          />
          
          <PricingPlan
            imgSrc="https://s28.postimg.cc/ju5bnc3x9/plane.png"
            header="2 sata tjedno"
            features={[
              'Detaljna razrada',
              'Intenzivna podrška pri učenju',
            ]}
            price="75€"
            isFeatured={true}
          />
          <PricingPlan
            imgSrc="https://s21.postimg.cc/tpm0cge4n/space-ship.png"
            header="Grupni paket"
            features={[
              'Dostupno za manje grupe',
              'Djeljenje znanja i iskustva polaznicima',
            ]}
            price="20€"
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
      <Link href="#/" className="button-55">
        {/* mailto:_ID@yoursite.com */}
        {isFeatured ? 'Rezerviraj' : 'Rezerviraj'}
      </Link>
    </div>
  );
}

export default BundlePack;
