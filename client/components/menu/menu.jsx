import React from 'react';

function Menu() {
  return (
    <div className="menu">
      <div className="menu__buttons">
        <a className="menu__link" href="/game">
          <button type="button" className="menu__button">
            START GAME
          </button>
        </a>
        <a className="menu__link" href="/about">
          <button type="button" className="menu__button">
            ABOUT
          </button>
        </a>
        <a className="menu__link" href="/logout">
          <button type="button" className="menu__button">
            LOGOUT
          </button>
        </a>
      </div>
    </div>
  );
}

export default Menu;
