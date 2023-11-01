import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <i class='bx bx-paper-plane'></i>
            <h3 className="about__title">Location</h3>
            <span className="about__subtitle">Dayton, Ohio</span>
        </div>
      
        <div className="about__box">
        <i className='bx bx-briefcase-alt' ></i>
            <h3 className="about__title">Completed </h3>
            <span className="about__subtitle">10+ projects</span>
        </div>
      
        <div className="about__box">
        <i class='bx bx-award'></i>
            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">3 Years</span>
        </div>
        
      
    </div>
  )
}

export default Info
