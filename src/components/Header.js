import React from 'react';
import headerLogo from '../images/logo.svg'

function Header() {

  //вернули разметку
  return (
    <>
      <header className='header page__header'>
        <a className='logo link' href='#' target='_blank'>
          <img className='header__logo' src={headerLogo} />
        </a>
      </header>
    </>
  );
}

export default Header;
