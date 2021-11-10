import React from "react";
import './style.css';
import '../../Components/Geral.css';

function Testimonial() {
  return (
    <section className="testimonial section">
        <h2 className="section_title">Testimonial</h2>
        <span className="section_subtitle">My client Saying</span>

        <div className="testimonial_container container">
            <div>
    {/*========================-Testimonial-1-============================*/}
                <div className="testimonial_content">
                    <div className="testimonial_data">
                        <div className="testimonial_header">
                            <img src="/img/testimonial1.1.jpg" alt="" className="testimonial_img"></img>

                            <div>
                                <h3 className="testimonial_name">Ana</h3>
                                <span className="testimonial_client">Client</span>
                            </div>
                        </div>

                        <div>
                            <i className="uil uil-star testimonial_icon-star"></i>
                            <i className="uil uil-star testimonial_icon-star"></i>
                            <i className="uil uil-star testimonial_icon-star"></i>
                            <i className="uil uil-star testimonial_icon-star"></i>
                            <i className="uil uil-star testimonial_icon-star"></i>
                        </div>
                    </div>

                    <p className="testimonial_description">I get a good impression, i carry out my project with all the possible quality and attencion and support 24 hours a day</p>
                </div>

                {/*========================-Testimonial-2-============================*/}
                <div className="testimonial_content">
                    <div className="testimonial_data">
                        <div className="testimonial_header">
                            <img src="/img/testimonial2.2.3.jpg" alt="" className="testimonial_img"></img>

                            <div>
                                <h3 className="testimonial_name">Matteo</h3>
                                <span className="testimonial_client">Client</span>
                            </div>
                        </div>

                        <div>
                            <i className="uil uil-star testimonial_icon-star"></i>
                            <i className="uil uil-star testimonial_icon-star"></i>
                            <i className="uil uil-star testimonial_icon-star"></i>
                            <i className="uil uil-star testimonial_icon-star"></i>
                            <i className="uil uil-star testimonial_icon-star"></i>
                        </div>
                    </div>

                    <p className="testimonial_description">I get a good impression, i carry out my project with all the possible quality and attencion and support 24 hours a day</p>
                </div>

                {/*========================-Testimonial-3-============================*/}
                <div className="testimonial_content">
                    <div className="testimonial_data">
                        <div className="testimonial_header">
                            <img src="/img/testimonial2.2.2.jpg" alt="" className="testimonial_img"></img>

                            <div>
                                <h3 className="testimonial_name">Argon</h3>
                                <span className="testimonial_client">Client</span>
                            </div>
                        </div>

                        <div>
                            <i className="uil uil-star testimonial_icon-star"></i>
                            <i className="uil uil-star testimonial_icon-star"></i>
                            <i className="uil uil-star testimonial_icon-star"></i>
                            <i className="uil uil-star testimonial_icon-star"></i>
                            <i className="uil uil-star testimonial_icon-star"></i>
                        </div>
                    </div>

                    <p className="testimonial_description">I get a good impression, i carry out my project with all the possible quality and attencion and support 24 hours a day</p>
                </div>
            </div>  
        </div>

    </section>
  );
}

export default Testimonial;