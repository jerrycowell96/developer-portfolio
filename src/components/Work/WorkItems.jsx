import React from 'react'

const WorkItems = ({item}) => {
  return (
    <div className='work__card' key={item.id}>
    <a href={item.demoLink} target="_blank" className='work__button'>
        <img src={item.image} alt='' className='work__img' /></a>
        <h3 className='work__title'>{item.title}</h3>
        <a href={item.demoLink} target="_blank" className='work__button'>
            Demo <i className='bx bx-right-arrow-alt work__button-icon'></i>
        </a>
        <a href={item.githubLink} target="_blank" className='work__button'>
            Repo <i className='bx bx-right-arrow-alt work__button-icon'></i>
        </a>
    </div>
  )
}

export default WorkItems
