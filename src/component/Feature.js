import React from 'react';
import "../style/features.css"

const Feature = ({ title, text }) => (
  <div className="scanel__features-container__feature">
    <div className="scanel__features-container__feature-title">
      <div />
      <h1>{title}</h1>
    </div>
    <div className="scanel__features-container_feature-text">
      <p>{text}</p>
    </div>
  </div>
);

export default Feature;
