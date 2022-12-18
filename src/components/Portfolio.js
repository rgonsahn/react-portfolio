import React from 'react'
import logo from '../images/logo.jpeg'

function Portfolio() {
  return (
    <div className='section porto-section' id='portfolio'>

      <br /><br />
      <h1>Portofolio</h1>
      <span>My Recent Works</span>
      <br />
      <br />
      <div className='porto-container'>
        <div className="porto-item">
          <img src="https://rgonsahn.github.io/robina-week-2-challenge/assets/images/polished.png" width="100%" />
          <h3>Polished</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam repellendus facilis obcaecati dignissimos maxime dicta pariatur consequatur omnis ratione</p>
          <a href="https://polished-booking-app.herokuapp.com/">
            <button className='button'>See More</button>
          </a>
        </div>
        <div className="porto-item">
          <img src="https://rgonsahn.github.io/robina-week-2-challenge/assets/images/musicPilot.png" width="100%" />
          <h3>Music Plot</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam repellendus facilis obcaecati dignissimos maxime dicta pariatur consequatur omnis ratione</p>
          <a href="https://garethtflynn.github.io/MusicPilot/">
            <button className='button'>See More</button>
          </a>
        </div>
        <div className="porto-item">
          <img src={logo} width="100%" />
          <h3>Flock Together</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam repellendus facilis obcaecati dignissimos maxime dicta pariatur consequatur omnis ratione</p>
          <a href="https://polished-booking-app.herokuapp.com/">
            <button className='button'>See More</button>
          </a>
        </div>
        <div className="porto-item">
          <img src="https://rgonsahn.github.io/robina-week-2-challenge/assets/images/ComingSoon4.png" width="100%" />
          <h3>Coming Soon</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam repellendus facilis obcaecati dignissimos maxime dicta pariatur consequatur omnis ratione</p>

        </div>
        <div className="porto-item">
          <img src="https://rgonsahn.github.io/robina-week-2-challenge/assets/images/ComingSoon4.png" width="100%" />
          <h3>Coming Soon</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam repellendus facilis obcaecati dignissimos maxime dicta pariatur consequatur omnis ratione</p>

        </div>
        <div className="porto-item">
          <img src="https://rgonsahn.github.io/robina-week-2-challenge/assets/images/ComingSoon4.png" width="100%" />
          <h3>Coming Soon</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam repellendus facilis obcaecati dignissimos maxime dicta pariatur consequatur omnis ratione</p>

        </div>
      </div>
    </div>
  )
}

export default Portfolio
