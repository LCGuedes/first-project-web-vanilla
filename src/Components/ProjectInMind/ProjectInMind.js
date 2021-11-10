import React from "react";
import "./style.css";
import '../../Components/Geral.css';


function InMind() {
  return (
    <section className="project section">
        <div className="project_bg">
            <div className="project_container container grid">
                <div className="project_data">
                    <h2 className="project_title">You have a new project</h2>
                    <p className="project_description">contact-me now and get a 30% discount on you new project</p>
                    <a href="#" className="button button-flex button-white">
                      Contact Me
                      <i className="uil uil-message project_icon button_icon"></i>
                    </a>
                </div>

                <img src="img/projects.png" className="project_img"></img>
            </div>
        </div>



    </section>
  );
}

export default InMind;