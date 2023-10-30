import React, { useState } from 'react';
import "./Services.css";

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }
  return (
    <section className="resume section" id="resume">
        
      <h2 className="section__title">Resume</h2>
      <span className="section__subtitle">What i offer?</span>

    <div className="resume__container container grid">
            <div className="resume__content">
                <div>
                    <i className="uil uil-web-grid resume__icon"></i>
                    <h3 className="resume__title">place <br /> holder</h3>
                </div>

                <span className="resume__button" onClick={() => 
                toggleTab(1)}>
                View More
                <i className="uil uil-arrow-right 
                resume__button-icon"></i>
                </span>

                <div className={toggleState === 1 ?
                "resume__modal active-modal" : "resume__modal"}>
                    <div className="resume__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times
                        resume__modal-close"></i>

                        <h3 className="resume__modal-title">placeholder</h3>
                        <p 
                        className="resume__modal-description">Service with more than 3 years of
                        experience. Providing quality work to clients and companies.</p>

                        <ul className="resume__modal-services grid">
                            <li className="resume__modal-service">
                                <i className="uil uil-check-circle
                                resume__modal-icon"></i>
                                <p className="resume__modal-info">I develop the user interface.</p>
                            </li>

                            <li className="resume__modal-service">
                                <i className="uil uil-check-circle
                                resume__modal-icon"></i>
                                <p className="resume__modal-info">web development</p>
                            </li>

                            <li className="resume__modal-service">
                                <i className="uil uil-check-circle
                                resume__modal-icon"></i>
                                <p className="resume__modal-info">i create ux element interactions</p>
                            </li>

                            <li className="resume__modal-service">
                                <i className="uil uil-check-circle
                                resume__modal-icon"></i>
                                <p className="resume__modal-info">web development</p>
                            </li>

                            <li className="resume__modal-service">
                                <i className="uil uil-check-circle
                                resume__modal-icon"></i>
                                <p className="resume__modal-info">web development</p>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        

      
        <div className="resume__content">
            <div>
                <i className="uil uil-web-grid resume__icon"></i>
                <h3 className="resume__title">place <br /> holder</h3>
            </div>

            <span className="resume__button" onClick={() => 
                toggleTab(1)}>View More{" "} <i 
            className="uil uil-arrow-right 
            resume__button-icon"></i></span>

            <div className={toggleState === 1 ?
                "resume__modal active-modal" : "resume__modal"}>
                <div className="resume__modal-content">
                    <i onClick={() => toggleTab(0)} className="uil uil-times
                    resume__modal-close"></i>

                    <h3 className="resume__modal-title">placeholder</h3>
                    <p 
                    className="resume__modal-description">Service with more than 3 years of
                    experience. Providing quality work to clients and companies.</p>

                    <ul className="resume__modal-services grid">
                        <li className="resume__modal-service">
                            <i className="uil uil-check-circle
                            resume__modal-icon"></i>
                            <p className="resume__modal-info">I develop the user interface.</p>
                        </li>

                        <li className="resume__modal-service">
                            <i className="uil uil-check-circle
                            resume__modal-icon"></i>
                            <p className="resume__modal-info">web development</p>
                        </li>

                        <li className="resume__modal-service">
                            <i className="uil uil-check-circle
                            resume__modal-icon"></i>
                            <p className="resume__modal-info">i create ux element interactions</p>
                        </li>

                        <li className="resume__modal-service">
                            <i className="uil uil-check-circle
                            resume__modal-icon"></i>
                            <p className="resume__modal-info">web development</p>
                        </li>

                        <li className="resume__modal-service">
                            <i className="uil uil-check-circle
                            resume__modal-icon"></i>
                            <p className="resume__modal-info">web development</p>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
      

    
        <div className="resume__content">
            <div>
                <i className="uil uil-web-grid resume__icon"></i>
                <h3 className="resume__title">place <br /> holder</h3>
            </div>

            <span className="resume__button" onClick={() => 
                toggleTab(1)}>View More <i 
            className="uil uil-arrow-right 
            resume__button-icon"></i></span>

            <div className={toggleState === 1 ?
                "resume__modal active-modal" : "resume__modal"}>
                <div className="resume__modal-content">
                    <i onClick={() => toggleTab(0)} className="uil uil-times
                    resume__modal-close"></i>

                    <h3 className="resume__modal-title">placeholder</h3>
                    <p 
                    className="resume__modal-description">Service with more than 3 years of
                    experience. Providing quality work to clients and companies.</p>

                    <ul className="resume__modal-services grid">
                        <li className="resume__modal-service">
                            <i className="uil uil-check-circle
                            resume__modal-icon"></i>
                            <p className="resume__modal-info">I develop the user interface.</p>
                        </li>

                        <li className="resume__modal-service">
                            <i className="uil uil-check-circle
                            resume__modal-icon"></i>
                            <p className="resume__modal-info">web development</p>
                        </li>

                        <li className="resume__modal-service">
                            <i className="uil uil-check-circle
                            resume__modal-icon"></i>
                            <p className="resume__modal-info">i create ux element interactions</p>
                        </li>

                        <li className="resume__modal-service">
                            <i className="uil uil-check-circle
                            resume__modal-icon"></i>
                            <p className="resume__modal-info">web development</p>
                        </li>

                        <li className="resume__modal-service">
                            <i className="uil uil-check-circle
                            resume__modal-icon"></i>
                            <p className="resume__modal-info">web development</p>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
};

export default Services
