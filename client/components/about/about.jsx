import React from 'react';
import goBack from '../../scripts/goback';
import Counter from '../../container.jsx';

function About() {
  return (
    <div className="about">
      <div className="about__content">
        <p>
          Hi. This is my first project during learning web development. I used
          here technologies like HTML, CSS, JavaScript, React and also below
          here is my first Redux example - simple counter.
        </p>
      </div>
      <Counter />
      <button type="button" className="menu__button" onClick={() => goBack()}>
        BACK
      </button>
    </div>
  );
}

export default About;
