import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <div className="menu">
      <div className="menu__buttons">
        <Link className="menu__link" to="/game">
          <button type="button" className="menu__button">
            START GAME
          </button>
        </Link>
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
