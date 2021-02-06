import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <>
      <div className="header">
        <div className="header__item header__item--left">
          <div className="header__decorators">
            <Link to="/" className="header__logo--small">
              <img src="https://trello-attachments.s3.amazonaws.com/5f7f173f3f927d440950a925/5fbe91ca731763484cbf700b/c3ebacb1622b4b0239102414956c34a4/pokemon_circle_bg.png" alt="pokedex-circle" className="header__img" />
            </Link>
            <div className="pokedex__buttons">
              <div className="button button--red" />
              <div className="button button--yellow" />
              <div className="button button--green" />
            </div>
          </div>
        </div>
        <div className="header__item desktop">
          <Link to="/" className="header__logo">
            <img src="https://trello-attachments.s3.amazonaws.com/5f7f173f3f927d440950a925/5fbe91ca731763484cbf700b/c80aad5de1667527b2eff890a69c3f8f/Pok%C3%A9dex_logo.webp" alt="pokedex-logo" className="header__logo-img" />
          </Link>
        </div>
        <div className="header__item">
          <a href="https://www.skylabcoders.com/es/" className="header__logo">
            <img src="https://trello-attachments.s3.amazonaws.com/5f4cb639a6f5eb1005114de4/601ee457cd6bfe69992a08bc/03ea20765a747c83ee0207b1a0d143a0/687474703a2f2f7777772e736b796c6162636f646572732e636f6d2f696d616765732f3430332f64656661756c742e706e67.png" alt="skylab-logo" className="header__logo-img" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Header;
