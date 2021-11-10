import React from "react";
import './Action.js';
import '../../Components/Geral.css';
import './Style.css';





function Skills() {
  return (

    <section className="skills section" id="skills">
        <h2 className="section_title">Skills</h2>
        <span className="section_subtitle ">My technical level</span>

        <div className="skills_container container grid">
            <div>
                {/*<!--======================Skills-1-=========================-->*/}
                <div className="skills_content skills_open">

                    <div className="skills_header">
                        <i className="uil uil-brackets-curly skills_icon"></i>
                        <div>
                            <h1 className="skills_title">FrontEnd Developer</h1>
                            <span className="skills_subtitle">More than 4 years</span>
                        </div>
                        <i className="uil uil-angle-down skills_arrow"></i>
                    </div>

                    <div className="skills_list grid">

                        <div className="skills_data">
                              <div className="skills_titles">
                                  <h3 className="skills_name">HTML</h3>
                                  <span className="skills_name">90%</span>
                              </div>
                        </div>
                        <div className="skills_bar">
                          <span className="skills_percentage skills_html"></span>
                        </div>

                        <div className="skills_data">
                              <div className="skills_titles">
                                  <h3 className="skills_name">CSS</h3>
                                  <span className="skills_name">80%</span>
                              </div>
                        </div>
                        <div className="skills_bar">
                          <span className="skills_percentage skills_css"></span>
                        </div>

                        <div className="skills_data">
                              <div className="skills_titles">
                                  <h3 className="skills_name">Javascript</h3>
                                  <span className="skills_name">60%</span>
                              </div>
                        </div>
                        <div className="skills_bar">
                          <span className="skills_percentage skills_js"></span>
                        </div>

                        <div className="skills_data">
                              <div className="skills_titles">
                                  <h3 className="skills_name">React</h3>
                                  <span className="skills_name">85%</span>
                              </div>
                        </div>
                        <div className="skills_bar">
                          <span className="skills_percentage skills_react"></span>
                        </div>

                    </div>
                </div>

                {/*<!--======================Skills-2-=========================-->*/}

                 <div className="skills_content skills_close">

                      <div className="skills_header">
                          <i className="uil uil-server-network skills_icon"></i>
                          <div>
                              <h1 className="skills_title">BackEnd Developer</h1>
                              <span className="skills_subtitle">More than 2 years</span>
                          </div>
                          <i className="uil uil-angle-down skills_arrow"></i>
                      </div>

                      <div className="skills_list grid">

                          <div className="skills_data">
                                <div className="skills_titles">
                                    <h3 className="skills_name">PHP</h3>
                                    <span className="skills_name">80%</span>
                                </div>
                          </div>
                          <div className="skills_bar">
                            <span className="skills_percentage skills_php"></span>
                          </div>

                          <div className="skills_data">
                                <div className="skills_titles">
                                    <h3 className="skills_name">Node Js</h3>
                                    <span className="skills_name">70%</span>
                                </div>
                          </div>
                          <div className="skills_bar">
                            <span className="skills_percentage skills_node"></span>
                          </div>

                          <div className="skills_data">
                                <div className="skills_titles">
                                    <h3 className="skills_name">Firebase</h3>
                                    <span className="skills_name">90%</span>
                                </div>
                          </div>
                          <div className="skills_bar">
                            <span className="skills_percentage skills_firebase"></span>
                          </div>

                          <div className="skills_data">
                                <div className="skills_titles">
                                    <h3 className="skills_name">Python</h3>
                                    <span className="skills_name">55%</span>
                                </div>
                          </div>
                          <div className="skills_bar">
                            <span className="skills_percentage skills_python"></span>
                          </div>

                      </div>
                 </div>
            </div>
        </div>
</section>

  );
}

export default Skills;