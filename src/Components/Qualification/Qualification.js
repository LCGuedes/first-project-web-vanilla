import React from 'react';

import './Action.js';
import '../../Components/Geral.css';



function Qualification() {
  return (

    <section className="qualification section">
    <h2 className="section_title">Qualification</h2>
    <span className="section_subtitle">My personal journey</span>

    <div className="qualification_container container">
        
        <div className="qualification_tabs">
            <div className="qualification_button button-flex qualification_active" data-target="#education">
                <i className="uil uil-graduation-cap qualification_icon"></i>
                Education
            </div>

            <div className="qualification_button button-flex" data-target="#work">
                <i className="uil uil-briefcase-alt qualification_icon"></i>
                Work
            </div>
        </div>

        <div className="qualification_sections">


            <div className="qualification_content qualification_active" data-content id="education">
       

                <div className="qualification_data">
                    <div>
                        <h3 className="qualification_title">Computer Enginner</h3>
                        <span className="qualification_subtitle">Peru - University</span>
                        <div className="qualification_calendar">
                            <i className="uil uil-calendar-alt"></i>
                            2009 - 2014
                        </div>
                    </div>

                    <div>
                        <span className="qualification_rounder"></span>
                        <span className="qualification_line"></span>
                    </div>
                    
                </div>
     

                <div className="qualification_data">
                    <div></div>

                    <div>
                      <span className="qualification_rounder"></span>
                      <span className="qualification_line"></span>
                    </div>

                    <div>
                        <h3 className="qualification_title">Web Design</h3>
                        <span className="qualification_subtitle">Spain - Institute</span>
                        <div className="qualification_calendar">
                            <i className="uil uil-calendar-alt"></i>
                            2014 - 2017
                        </div>
                    </div>
                </div>
     
              <div className="qualification_data">
                  <div>
                      <h3 className="qualification_title">Web Development</h3>
                      <span className="qualification_subtitle">Peru - Institute</span>
                      <div className="qualification_calendar">
                          <i className="uil uil-calendar-alt"></i>
                          2017 - 2019
                      </div>
                  </div>

                      <div>
                          <span className="qualification_rounder"></span>
                          <span className="qualification_line"></span>
                      </div>
                  
              </div>
       
              <div className="qualification_data">
                  <div></div>

                  <div>
                    <span className="qualification_rounder"></span>
                    {/*<!--<span className="qualification_line"></span>-->*/}
                  </div>

                  <div>
                      <h3 className="qualification_title">Master in Ui/Ux</h3>
                      <span className="qualification_subtitle">Peru - Institute</span>
                      <div className="qualification_calendar">
                          <i className="uil uil-calendar-alt"></i>
                          2019 - 2021
                      </div>
                  </div>
              </div>
            </div>



            <div className="qualification_content" data-content id="work">
          
                  <div className="qualification_data">
                      <div>
                          <h3 className="qualification_title">Software Enginner</h3>
                          <span className="qualification_subtitle">Microsoft - Peru</span>
                          <div className="qualification_calendar">
                              <i className="uil uil-calendar-alt"></i>
                              2016 - 2018
                          </div>
                      </div>
  
                          <div>
                              <span className="qualification_rounder"></span>
                              <span className="qualification_line"></span>
                          </div>
                      
                  </div>
          
                  <div className="qualification_data">
                      <div></div>
  
                      <div>
                          <span className="qualification_rounder"></span>
                          <span className="qualification_line"></span>
                      </div>
  
                      <div>
                          <h3 className="qualification_title">FrontEnd Developer</h3>
                          <span className="qualification_subtitle">Apple Inc - Spain</span>
                          <div className="qualification_calendar">
                              <i className="uil uil-calendar-alt"></i>
                              2018 - 2020
                          </div>
                      </div>
                  </div>
          
                <div className="qualification_data">
                    <div>
                        <h3 className="qualification_title">Ui Designer</h3>
                        <span className="qualification_subtitle">Figma - Spain</span>
                        <div className="qualification_calendar">
                            <i className="uil uil-calendar-alt"></i>
                            2017 - 2019
                        </div>
                    </div>
  
                        <div>
                            <span className="qualification_rounder"></span>
                            {/*<!--<span className="qualification_line"></span>-->*/}
                        </div>
                    
                </div>
            </div>
        </div>
     </div>
</section>
  );
}

export default Qualification;