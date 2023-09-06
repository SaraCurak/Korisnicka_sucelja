import React from 'react';
import iconbox3 from '../public/images/icon-box-3.png'

function Bundledm() {
  return (
    <div className="backgroundp">
      <div className="containerp">
        <div className="panel pricing-table">
          <PricingPlan
            header="Državna matura"
            features={[
              'Personalizirana nastava',
              'Odabir instruktora po želji',
            ]}
            price="45min 14€"
            price2="60min 18€"
          />
        </div>
        
      </div>
    </div>
  );
}

function PricingPlan({ imgSrc, header, features, price, price2, isFeatured }) {
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
      {price2 && <span className="pricing-price">{price2}</span>}
      <a href="#/" className="button-55">
        {isFeatured ? 'Free trial' : 'Rezerviraj'}
      </a>
    </div>
  );
}

export default Bundledm;
