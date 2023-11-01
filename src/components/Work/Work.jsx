import React from 'react';
import "./Work.css"
import Works from './Works';

const Work = () => {
  return (
    <section className="work container section" id="work">
    <h2 className="section__title"> My recent works</h2>
    <span className="section__subtitle">portfolio</span>

    <Works /> 
    </section>
  )
}

export default Work




