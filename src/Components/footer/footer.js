import React from 'react';
import '../../Components/Geral.css';

import './style.css';

function Footer() {
  return (
    <section className="footer">
        <div className="footer_bg">
            <div className="footer_container container grid">

              <div>
                <h1 className="footer_title">CoolRuja</h1>
                <span className="footer_subtitle">FrontEnd Developer</span>
              </div>

              <ul className="footer_links">
                  <li>
                      <a href="#services" className="footer_link">Services</a>
                  </li>
                  <li>
                      <a href="#portfolio" className="footer_link">Portfolio</a>
                  </li>
                  <li>
                      <a href="#contact" className="footer_link">Contact Me</a>
                  </li>
              </ul>

              <div className="footer_socials">
                  <a href="https://www.facebook.com" target="_blank" className="footer_social">
                      <i className="uil uil-facebook-f"></i>
                  </a>

                  <a href="https://www.instagram.com" target="_blank"  className="footer_social">
                      <i className="uil uil-instagram"></i>
                  </a>

                  <a href="https://www.twitter.com" target="_blank"  className="footer_social">
                      <i className="uil uil-twitter-alt"></i>
                  </a>
              </div>
            </div>
            <p className="footer_copy">&#169; CoolRuja. All right reserved</p>
        </div>
        
    </section>
  );
}

export default Footer;