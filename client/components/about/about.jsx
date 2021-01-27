import React from 'react';
import buttonBack from '../../scripts/buttonback';

function About() {
  return (
    <div className="about">
      <div className="about__content">
        <p>ble ble ble ble ble</p>
      </div>
      <button
        type="button"
        className="menu__button"
        onClick={() => buttonBack()}>
        BACK
      </button>
    </div>
  );
}

export default About;
