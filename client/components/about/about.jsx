import React from 'react';
import goBack from '../../scripts/goback';
import Counter from '../../container.jsx';

function About() {
  return (
    <div className="about">
      <div className="about__content">
        <p>ble ble ble ble ble</p>
      </div>
      <Counter />
      <button type="button" className="menu__button" onClick={() => goBack()}>
        BACK
      </button>
    </div>
  );
}

export default About;
