import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <div className="menu">
      <div className="menu__buttons">
        <a className="menu__link" href="/game">
          <button type="button" className="menu__button">
            START GAME
          </button>
        </a>
        <Link className="menu__link" to="/about">
          <button type="button" className="menu__button">
            ABOUT
          </button>
        </Link>
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
