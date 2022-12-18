import React from 'react'
import cv from '../images/icons8-cv-96.png'
function Resume() {
  return (
    <div className='section resume-section' id='resume'>
      <br /><br />
      <h1>Resume</h1>
      <span>Download my resume here</span>
      <br />
      <br />
      <div className='resume-container'>

        <img src={cv} width="40%" />
        <br />
        <a href="https://docs.google.com/document/d/1yZAVj6Vy4Y5R3ghLWvSC2T_M8ROOlp6S/edit?usp=drivesdk&ouid=113525448588683419205&rtpof=true&sd=true">
          <button className='button'>
            Click to download
          </button>
        </a>
      </div>
    </div>
  )
}

export default Resume
