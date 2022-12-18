import React, { useState } from 'react'

function Header() {
  const [activeLink, setActiveLink] = useState('#about')
  return (
    // section for nav
    <div className='header'>

      {/* nav links */}
      <nav class="nav">
        <h1>Robina Gonsahn</h1>
        <a href="#about" className={activeLink == '#about' ? 'active-link' : ''} onClick={() => setActiveLink('#about')}>About Me</a>
        <a href="#portfolio" className={activeLink == '#portfolio' ? 'active-link' : ''} onClick={() => setActiveLink('#portfolio')}>Portofolio</a>
        <a href="#contact" className={activeLink == '#contact' ? 'active-link' : ''} onClick={() => setActiveLink('#contact')}>Contact</a>
        <a href="#resume" className={activeLink == '#resume' ? 'active-link' : ''} onClick={() => setActiveLink('#resume')}>Resume</a>
      </nav>
    </div>
  )
}

export default Header
