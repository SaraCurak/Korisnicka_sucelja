import React from 'react';

function Bundle() {
  return (
    <div className="backgroundp">
      <div className="containerp">
        <div className="panel pricing-table">
          <PricingPlan
            imgSrc="https://s22.postimg.cc/8mv5gn7w1/paper-plane.png"
            header="Personal"
            features={[
              'Custom domains',
              'Sleeps after 30 mins of inactivity',
            ]}
            price="Free"
          />
          <PricingPlan
            imgSrc="https://s28.postimg.cc/ju5bnc3x9/plane.png"
            header="Small team"
            features={[
              'Never sleeps',
              'Multiple workers for more powerful apps',
            ]}
            price="$150"
            isFeatured={true}
          />
          <PricingPlan
            imgSrc="https://s21.postimg.cc/tpm0cge4n/space-ship.png"
            header="Enterprise"
            features={[
              'Dedicated',
              'Simple horizontal scalability',
            ]}
            price="$400"
          />
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
      <a href="#/" className="pricing-button">
        {isFeatured ? 'Free trial' : 'Sign up'}
      </a>
    </div>
  );
}

export default Bundle;
