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
          <p>A handy tool for managers and technicians to keep track of upcoming appointments. Clients can book their appointment directly through the application by signing up through the login page, once in the Polished system clients can select their favorite technician, preferred appointment time (based on availability) through the built in calander. When the client has finished their appointment a SMS message will be sent from the application to send automated appointment reminders.
          </p>
          <a href="https://polished-booking-app.herokuapp.com/">
            <button className='button'>See More</button>
          </a>
        </div>
        <div className="porto-item">
          <img src="https://rgonsahn.github.io/robina-week-2-challenge/assets/images/musicPilot.png" width="100%" />
          <h3>Music Plot</h3>
          <p>The Music Pilot allows the music enthusiast to retrieve music videos, a list of tracks and song lyrics, from their favorite artist with a simple search. Enter the artist of your choice in the search input field then click the search button to see a display of artists list, a video, and song lyrics. The application allows the user to search for various musical content with the click of a button. We collaboratively worked with the data from the MusixMatch and YouTube Iframe player APIs to search and display the content of the application. We used the local storage web API to construct a saved artist list to the application.
          </p>
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
