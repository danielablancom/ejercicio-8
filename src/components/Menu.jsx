import React from "react";

const Menu = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <img src=""></img>
      </div>
      <div className="header__list">
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Sobre</a>
          </li>
          <li>
            <a>Servicios</a>
          </li>
          <li>
            <a>Portafolio</a>
          </li>
          <li>
            <a>Contacto</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
