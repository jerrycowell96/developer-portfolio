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
                        <h3 className="qual__title">Web design</h3>
                        <span className="qual__subtitle">atlanta institute</span>
                        <div className="qual__calendar">
                            <i className="uil uil-calendar-alt"></i> 2021 - present
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
                        <h3 className="qual__title">art director</h3>
                        <span className="qual__subtitle">atlanta institute</span>
                        <div className="qual__calendar">
                            <i className="uil uil-calendar-alt"></i> 2021 - present
                        </div>
                    </div>
                </div>

                <div className="qual__data">
                    <div>
                        <h3 className="qual__title">Web development</h3>
                        <span className="qual__subtitle">atlanta institute</span>
                        <div className="qual__calendar">
                            <i className="uil uil-calendar-alt"></i> 2021 - present
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
                        <h3 className="qual__title">designer plus</h3>
                        <span className="qual__subtitle">atlanta institute</span>
                        <div className="qual__calendar">
                            <i className="uil uil-calendar-alt"></i> 2021 - present
                        </div>
                    </div>
                </div>
            </div>

            <div className={toggleState === 2
            ? "qual__content qual__content-active" : "qual__content"}>
                <div className="qual__data">
                    <div>
                        <h3 className="qual__title">enter job</h3>
                        <span className="qual__subtitle">enter company</span>
                        <div className="qual__calendar">
                            <i className="uil uil-calendar-alt"></i> 2021 - present
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
                        <h3 className="qual__title">enter job</h3>
                        <span className="qual__subtitle">company</span>
                        <div className="qual__calendar">
                            <i className="uil uil-calendar-alt"></i> 2021 - present
                        </div>
                    </div>
                </div>

                <div className="qual__data">
                    <div>
                        <h3 className="qual__title">enter job</h3>
                        <span className="qual__subtitle">company</span>
                        <div className="qual__calendar">
                            <i className="uil uil-calendar-alt"></i> 2021 - present
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
                        <h3 className="qual__title">designer plus</h3>
                        <span className="qual__subtitle">atlanta institute</span>
                        <div className="qual__calendar">
                            <i className="uil uil-calendar-alt"></i> 2021 - present
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
