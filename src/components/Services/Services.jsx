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
      <span className="section__subtitle">My job experiences</span>

    <div className="resume__container container grid">
            <div className="resume__content">
                <div>
                    <i className="uil uil-web-grid resume__icon"></i>
                    <h3 className="resume__title">Software <br /> Engineer Intern</h3>
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

                        <h3 className="resume__modal-title">Summary</h3>
                        <p 
                        className="resume__modal-description">Service with more than 3 years of
                        experience. Providing quality work to clients and companies.</p>

                        <ul className="resume__modal-services grid">
                            <li className="resume__modal-service">
                                <i className="uil uil-check-circle
                                resume__modal-icon"></i>
                                <p className="resume__modal-info">Collaborated on the development of real-time control software for advanced tactical radio equipment.</p>
                            </li>

                            <li className="resume__modal-service">
                                <i className="uil uil-check-circle
                                resume__modal-icon"></i>
                                <p className="resume__modal-info">Worked closely with cross-functional teams to evaluate hardware-software interfaces and performance requirements.</p>
                            </li>

                            <li className="resume__modal-service">
                                <i className="uil uil-check-circle
                                resume__modal-icon"></i>
                                <p className="resume__modal-info">Contributed to all phases of the software and hardware development life cycle.</p>
                            </li>

                            <li className="resume__modal-service">
                                <i className="uil uil-check-circle
                                resume__modal-icon"></i>
                                <p className="resume__modal-info">Conducted software testing and curated <a href="https://amiga.farm-ng.com/docs/getting-started/" target="_blank">documentation</a>, including public-facing technical documentation, building APIs, and technical support for beta-level products.
</p>
                            </li>

                            <li className="resume__modal-service">
                                <i className="uil uil-check-circle
                                resume__modal-icon"></i>
                                <p className="resume__modal-info">Manage planning activities such as preparing and maintaining current inventory and customer feedback for future iterations of product.</p>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        

      
        <div className="resume__content">
            <div>
                <i className="uil uil-web-grid resume__icon"></i>
                <h3 className="resume__title">Audio Visual <br /> Technician</h3>
            </div>

            <span className="resume__button" onClick={() => 
                toggleTab(2)}>View More{" "} <i 
            className="uil uil-arrow-right 
            resume__button-icon"></i></span>

            <div className={toggleState === 2 ?
                "resume__modal active-modal" : "resume__modal"}>
                <div className="resume__modal-content">
                    <i onClick={() => toggleTab(0)} className="uil uil-times
                    resume__modal-close"></i>

                    <h3 className="resume__modal-title">Summary</h3>
                    <p 
                    className="resume__modal-description">Service with more than 3 years of
                    experience. Providing quality work to clients and companies.</p>

                    <ul className="resume__modal-services grid">
                        <li className="resume__modal-service">
                            <i className="uil uil-check-circle
                            resume__modal-icon"></i>
                            <p className="resume__modal-info">Effectively managed facility-related requests, ensuring seamless event operations.</p>
                        </li>

                        <li className="resume__modal-service">
                            <i className="uil uil-check-circle
                            resume__modal-icon"></i>
                            <p className="resume__modal-info">Coordinated audio, lighting, and video requirements for events.</p>
                        </li>

                        <li className="resume__modal-service">
                            <i className="uil uil-check-circle
                            resume__modal-icon"></i>
                            <p className="resume__modal-info">Documented and maintained records of facility requests and resolutions.</p>
                        </li>

                        <li className="resume__modal-service">
                            <i className="uil uil-check-circle
                            resume__modal-icon"></i>
                            <p className="resume__modal-info">Negotiate procurement of products and services through administering customer quotes and contract
</p>
                        </li>

                        <li className="resume__modal-service">
                            <i className="uil uil-check-circle
                            resume__modal-icon"></i>
                            <p className="resume__modal-info">Conducted quality checks on AV equipment, ensuring smooth event execution.</p>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
      

    
        <div className="resume__content">
            <div>
                <i className="uil uil-web-grid resume__icon"></i>
                <h3 className="resume__title">Creative <br /> Assistant</h3>
            </div>

            <span className="resume__button" onClick={() => 
                toggleTab(3)}>View More <i 
            className="uil uil-arrow-right 
            resume__button-icon"></i></span>

            <div className={toggleState === 3 ?
                "resume__modal active-modal" : "resume__modal"}>
                <div className="resume__modal-content">
                    <i onClick={() => toggleTab(0)} className="uil uil-times
                    resume__modal-close"></i>

                    <h3 className="resume__modal-title">Summary</h3>
                    <p 
                    className="resume__modal-description">Service with more than 3 years of
                    experience. Providing quality work to clients and companies.</p>

                    <ul className="resume__modal-services grid">
                        <li className="resume__modal-service">
                            <i className="uil uil-check-circle
                            resume__modal-icon"></i>
                            <p className="resume__modal-info">Assisted with pre-conference preparations, including assembling name badges and conference materials.</p>
                        </li>

                        <li className="resume__modal-service">
                            <i className="uil uil-check-circle
                            resume__modal-icon"></i>
                            <p className="resume__modal-info">Managed confidential materials and handled attendee inquiries.</p>
                        </li>

                        <li className="resume__modal-service">
                            <i className="uil uil-check-circle
                            resume__modal-icon"></i>
                            <p className="resume__modal-info">Provided proactive troubleshooting and addressed attendee issues.</p>
                        </li>

                        <li className="resume__modal-service">
                            <i className="uil uil-check-circle
                            resume__modal-icon"></i>
                            <p className="resume__modal-info">Create and design name badges and conference material using Adobe Suite</p>
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
