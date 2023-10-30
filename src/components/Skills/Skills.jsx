import React from 'react';
import "./Skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";
import Misc from "./Misc"

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My Technical Level</span>

        <div className="skills__container container grid">
            <Frontend />
            <Backend />
            <Misc />
        </div>
    </section>
  )
}

export default Skills
