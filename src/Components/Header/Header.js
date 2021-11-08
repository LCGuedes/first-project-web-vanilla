import React from "react";
import '../../Components/Geral.css';

import './Action.js';


function Header() {
  return (
    <header className="header" id="header">
    <nav className="nav container">
      <a href="#" className="nav_logo"> Owl</a>

    <div className="nav_menu" id="nav-menu">
        <ul className="nav_list grid">
            <li className="nav_item">
                <a href="#home" className="nav_link">
                  <i className="uil uil-estate nav-icon"></i> Home
                </a>
            </li>
            <li className="nav_item">
                <a href="#about" className="nav_link"><i className="uil uil-user nav-icon"></i> About
                </a>
            </li>
            <li className="nav_item">
                <a href="#skills" className="nav_link"><i className="uil uil-file-alt nav-icon"></i>  Skills
                </a>
            </li>
            <li className="nav_item">
                <a href="#services" className="nav_link"><i className="uil uil-bag-alt nav-icon"></i> Services
                </a>
            </li>
            <li className="nav_item">
                <a href="#portifolio" className="nav_link"><i className="uil uil-scenery nav-icon"></i> Portifolio
                </a>
            </li>
            <li className="nav_item">
                <a href="#contact" className="nav_link"><i className="uil uil-message nav-icon" id="contact"></i>
                  <i/> Contact-me
                </a>
            </li>
        </ul>
        <i className="uil uil-times nav_close" id="nav-close"></i>
    </div>

    <div className="nav_btns">
        <div className="nav_toggle" id="nav-toggle">
          <i className="uil uil-apps"></i>
        </div>
    </div>
  </nav>
  </header>

  );
}

export default Header;