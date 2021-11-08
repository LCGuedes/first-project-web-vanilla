import React from "react";
import '../../Components/Geral.css';
import './Style.css';


function Portfolio() {
  return (
    <section className="portfolio section" id="portfolio">
        <h2 className="section_title">Portfolio</h2>
        <span className="section_subtitle">Most recent work</span>

        <div className="portfolio_container container">
            <div>
            {/*===================Portfolio-1=========================== */}
                <div className="portfolio_content grid">
                    <img className="portfolio_img" src="/img/portfolio1.jpg"></img>

                    <div className="portfolio_data">
                        <h3 className="portfolio_title">Modern Website</h3>
                        <p className="portfolio_description">
                          Website adaptable to all devices, with ui components and animed 
                          interactions.</p>
                        <a href="#" className="button button-flex button-small portfolio_button">
                          Demo
                          <i class="uil uil-arrow-right button_icon"></i>
                        </a>

                    </div>
                </div>

                {/*===================Portfolio-2-=========================== */}
                <div className="portfolio_content grid">
                    <img className="portfolio_img" src="/img/portfolio2.jpg"></img>

                    <div className="portfolio_data">
                        <h3 className="portfolio_title">Brand Design</h3>
                        <p className="portfolio_description">
                          Website adaptable to all devices, with ui components and animed 
                          interactions.</p>
                        <a href="#" className="button button-flex button-small portfolio_button">
                          Demo
                          <i class="uil uil-arrow-right button_icon"></i>
                        </a>

                    </div>
                </div>

                {/*===================Portfolio-3-=========================== */}
                <div className="portfolio_content grid">
                    <img className="portfolio_img" src="/img/portfolio3.jpg"></img>

                    <div className="portfolio_data">
                        <h3 className="portfolio_title">Online Store</h3>
                        <p className="portfolio_description">
                          Website adaptable to all devices, with ui components and animed 
                          interactions.</p>
                        <a href="#" className="button button-flex button-small portfolio_button">
                          Demo
                          <i class="uil uil-arrow-right button_icon"></i>
                        </a>

                    </div>
                </div>

            </div>
        </div>









    </section>

  );
}

export default Portfolio;