import React from 'react';

import '../../Components/Geral.css';


function Home() {
  return (
    
    <section className="home section" id="home">
        <div className="home_container container grid">
            <div className="home_content grid">

                <div className="home_social">
                    <a href="#" target="_blank" className="home_social-icon">
                      <i className="uil uil-linkedin-alt"></i>
                    </a>

                    <a href="#" target="_blank" className="home_social-icon">
                      <i className="uil uil-dribbble"></i>
                    </a>

                    <a href="#"target="_blank" className="home_social-icon">
                      <i className="uil uil-github"></i>
                    </a>
                </div>
                
                <div className="home_img">
                    <svg class="home_blob" viewBox="0 0 200 187" >
                          <mask id="mask0" mask-type="alpha">
                              <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                              130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                              97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                              0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
                          </mask>
                          <g mask="url(#mask0)">
                              <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                              165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                              129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                              -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
                              <image class="home_blob-img" x="-32%" href="/img/Perfil.jpg"/>
                          </g>
                    </svg>
                </div>          

                <div className="home_data">
                    <h1 className="home_title">Hi, Im Owl!</h1>
                    <h3 className="home_subtitle">Frontend developer</h3>
                    <p className="home_description">High level experience in web design and development knowledge producing quality work. </p>
                    <a href="#contact" className="button button-flex">
                      Contact Me <i className="uil uil-message button_icon"></i>
                    </a>
                </div>
              
                <div className="home_scroll">
                    <a href="#about" className="home_scroll-button button-flex">
                        <i className="uil uil-mouse-alt home_scroll-mouse"></i>
                        <span className="home_scroll-name">Scroll down</span>
                        <i className="uil uil-arrow-down home_scroll-arrow"></i>
                    </a>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Home;