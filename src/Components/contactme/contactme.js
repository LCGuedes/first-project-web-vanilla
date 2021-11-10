import React from "react";
import './style.css';
import '../../Components/Geral.css';

function Contactme() {
  return (
    <section className="contact section" id="contact">
      <h2 className="section_title">Contact Me</h2>
      <span className="section_subtitle">Get in Touch</span>

      <div className="conact_container container grid">
          <div>
              <div className="contact_information">
                  <i className="uil uil-phone contact_icon"></i>

                  <div>
                      <h3 className="contact_title">Call Me</h3>
                      <span className="contact_subtitle">999-777-333</span>
                  </div>
              </div> 
              
              <div className="contact_information">
                  <i className="uil uil-envelope contact_icon"></i>

                  <div>
                      <h3 className="contact_title">Email</h3>
                      <span className="contact_subtitle">teste123@exemple.com</span>
                  </div>
              </div> 
              
              <div className="contact_information">
                  <i className="uil uil-map-marker contact_icon"></i>

                  <div>
                      <h3 className="contact_title">Location</h3>
                      <span className="contact_subtitle">São luís-MA</span>
                  </div>
              </div> 

              <form action="" className="contact_form grid">
                  <div className="contact_inputs grid">
                      <div className="contact_content">
                          <label for="" className="contact_label">nome</label>
                          <input type="text" className="contact_input"></input>
                      </div>

                      <div className="contact_content">
                          <label for="" className="contact_label">Email</label>
                          <input type="email" className="contact_input"></input>
                      </div>

                      <div className="contact_content">
                          <label for="" className="contact_label">Project</label>
                          <input type="text" className="contact_input"></input>
                      </div>

                      <div className="contact_content">
                          <label for="" className="contact_label">Message</label>
                          <textarea name="" id="" cols="0" rows="7" className="contact_input"></textarea>
                      </div>

                      <div>
                          <a href="#" className="button button-flex">
                            Send Message

                            <i className="uil uil-message button_icon"></i>
                          </a>
                      </div>
                  </div>
              </form>
          </div>
      </div>
    </section>
  );
}

export default Contactme;