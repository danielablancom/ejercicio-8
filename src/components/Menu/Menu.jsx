import React from "react";
import './Menu.css';
import LOGO from '../../assets/LOGO.png'; 

const Menu = () => {
  return (

    <div className="header">
    <div className="header__logo">
    <img src={LOGO} className="png-logo" alt="logo" />
    </div>
    <div className="header__list">

        <a className="header__list--list" href="/#Home">Home</a>
        <a className="header__list--list" href="/#Sobre">Sobre</a>
        <a className="header__list--list" href="/#Servicios">Servicios</a>
        <a className="header__list--list" href="/#Portafolio">Portafolio</a>
        <a className="header__list--list" href="/#Contacto">Contacto</a>


    </div>
</div>

  );
};

export default Menu;

