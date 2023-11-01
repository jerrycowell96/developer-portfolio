import React, { useState } from 'react'
import "./Qualifications.css"

const Qualifications = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

  return (
    <section className="qualifications section" id="qualifications">
    <h2 className="section__title">Qualifications</h2>
      <span className="section__subtitle">My personal Journey
      </span>

      <div className="qual__container container">
        <div className="qual__tabs">
            <div className={toggleState === 1 
            ? "qual__button qual__active button--flex" : "qual__button button--flex"}
            onClick={() => toggleTab(1)}
            >
                <i className="uil uil-graduation-cap qual__icon"></i>{" "} 
                Education
            </div>

            <div className={toggleState === 2 
            ? "qual__button qual__active button--flex" : "qual__button button--flex"}
            onClick={() => toggleTab(2)}
            >
                <i className="uil uil-graduation-cap qual__icon"></i>{" "} 
                Experience
            </div>   
        </div>

        <div className="qual__sections">
            <div className={toggleState === 1 
            ? "qual__content qual__content-active" : "qual__content"}>
                <div className="qual__data">
                    <div>
                        <h3 className="qual__title">Wed Developer Certificate</h3>
                        <span className="qual__subtitle">Zero to Mastery</span>
                        <div className="qual__calendar">
                            <i className="uil uil-calendar-alt"></i> 2023
                        </div>
                    </div>

                    <div>
                        <span className="qual__rounder"></span>
                        <span className="qual__line"></span>
                    </div>
                </div>

                                <div className="qual__data">
                                <div></div>

                                <div>
                        <span className="qual__rounder"></span>
                        <span className="qual__line"></span>
                    </div>
                    <div>
                        <h3 className="qual__title">MS in Software Engineering</h3>
                        <span className="qual__subtitle">Kennesaw State University</span>
                        <div className="qual__calendar">
                            <i className="uil uil-calendar-alt"></i> 2021 - 2022
                        </div>
                    </div>
                </div>

                <div className="qual__data">
                    <div>
                        <h3 className="qual__title">Foundations in Software Engineering Certificate</h3>
                        <span className="qual__subtitle">Kennesaw State University</span>
                        <div className="qual__calendar">
                            <i className="uil uil-calendar-alt"></i> 2020 - 2021
                        </div>
                    </div>

                    <div>
                        <span className="qual__rounder"></span>
                        <span className="qual__line"></span>
                    </div>
                </div>

                                <div className="qual__data">
                                <div></div>

                                <div>
                        <span className="qual__rounder"></span>
                        <span className="qual__line"></span>
                    </div>
                    <div>
                        <h3 className="qual__title">BA in Marketing </h3>
                        <span className="qual__subtitle">Columbus State University</span>
                        <div className="qual__calendar">
                            <i className="uil uil-calendar-alt"></i> 2014 - 2018
                        </div>
                    </div>
                </div>
            </div>

            <div className={toggleState === 2
            ? "qual__content qual__content-active" : "qual__content"}>
                <div className="qual__data">
                    <div>
                        <h3 className="qual__title">Software Engineering Intern</h3>
                        <span className="qual__subtitle">Farm-ng Inc.</span>
                        <div className="qual__calendar">
                            <i className="uil uil-calendar-alt"></i> 2022 - 2023
                        </div>
                    </div>

                    <div>
                        <span className="qual__rounder"></span>
                        <span className="qual__line"></span>
                    </div>
                </div>

                 <div className="qual__data">
                                <div></div>

                                <div>
                        <span className="qual__rounder"></span>
                        <span className="qual__line"></span>
                    </div>
                    <div>
                        <h3 className="qual__title">Audio / Visual Technician</h3>
                        <span className="qual__subtitle">Glastonbury, Inc.</span>
                        <div className="qual__calendar">
                            <i className="uil uil-calendar-alt"></i> 2022 - 2023
                        </div>
                    </div>
                </div>

                <div className="qual__data">
                    <div>
                        <h3 className="qual__title">Sales and Retail Associate</h3>
                        <span className="qual__subtitle">FedEx</span>
                        <div className="qual__calendar">
                            <i className="uil uil-calendar-alt"></i> 2021 - 2022
                        </div>
                    </div>

                    <div>
                        <span className="qual__rounder"></span>
                        <span className="qual__line"></span>
                    </div>
                </div>

               <div className="qual__data">
                                <div></div>

                                <div>
                        <span className="qual__rounder"></span>
                        <span className="qual__line"></span>
                    </div>
                    <div>
                        <h3 className="qual__title">Creative Assistant</h3>
                        <span className="qual__subtitle">TED</span>
                        <div className="qual__calendar">
                            <i className="uil uil-calendar-alt"></i> 2021
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Qualifications
