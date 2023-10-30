import React from 'react'

const ScrollDown = () => {
  return (
    <div className="home__scroll">
        <a href="#about" className="home__scroll-button button--flex">
<svg class="home__scroll-mouse" 
        width="32px" 
        height="32px" 
        clip-rule="evenodd" 
        fill-rule="evenodd" 
        stroke-linecap="round" 
        stroke-linejoin="round" 
        stroke-miterlimit="1.5" 
        version="1.1" 
        viewBox="0 0 247 390" 
        xmlns="http://www.w3.org/2000/svg">
<path 
        class="wheel" 
        d="m123.36 79.775v72.843" 
        fill="none" 
        stroke="#000" 
        stroke-width="20px"/>
<path d="m236.72 123.36c0-62.565-50.794-113.36-113.36-113.36-62.565 0-113.36 50.794-113.36 113.36v143.24c0 62.565 50.794 113.36 113.36 113.36 62.564 0 113.36-50.794 113.36-113.36v-143.24z" fill="none" stroke="#000" stroke-width="20px"/>
</svg>
<span className="home__scroll-name">Scroll Down</span>
<i class="uil uil-arrow-down home__scroll-arrow"></i>
        </a>
    </div>
  )
}

export default ScrollDown

