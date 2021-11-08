import React from 'react';

import '../../Components/Geral.css';

function About() {
  return (
    <section className="about section" id="about">
      <h2 className="section_title">About Me</h2>
      <span className="section_subtitle">My introduction</span>
      <div className="about_container container grid">
          <img src="./img/about.jpg" alt="about" className="about_img"/>
      
          <div className="about_data">
              <p className="about_description">Owls are birds from the order Strigiformes, which includes over 200 species of mostly solitary and nocturnal birds of prey typified by an upright stance, a large, broad head, binocular vision, binaural hearing, sharp talons, and feathers adapted for silent flight.</p>
            
              <div className="about_info">
  
                  <div>
                      <span className="about_info-title">08+</span>
                      <span className="about_info-name">Years <br/> experience</span>
                  </div> 
    
                  <div>
                      <span className="about_info-title">20+</span>
                      <span className="about_info-name">Completed <br/> Project</span>
                  </div>
    
                  <div>
                      <span className="about_info-title">05+</span>
                      <span className="about_info-name">Companies <br/> worked</span>
                  </div>
              </div>
              <div className="about_buttons">
                <a download="" href="./Assets/pdf/Alexa-Cv.pdf" className="button button-flex">
                  Download CV <i className="uil uil-download-alt button_icon"></i>
                </a>
              </div>
          </div>
      </div>
</section>
  )
}

export default About;