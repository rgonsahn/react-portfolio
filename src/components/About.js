import React from 'react'

function About() {
  return (
    <div className='section' id='about'>
      <h1 >About Me</h1>
      <span>Get to know</span>
      <br /><br />
      <div className='about'>
        <div className='about-item'>
          <img width='100%' src="https://rgonsahn.github.io/robina-week-2-challenge/IMG_0920_Me-too.jpg" alt="" />
        </div>
        <div className='about-item-2'>
          <h2>Hi, i am Robina Gonsahn</h2>
          <p>
            My name is Robina Gonsahn, I am a 34 year old with a bachelor's of science degree in nursing. In my free time I enjoy reading
            and studying computer science. I will be completing my certification as a full stack web developer from Georgia Tech Coding Boot Camp in December 2022. My skills include html, css, and basic java scr
          </p>

          <b>Phone Number: (678)412-8322</b><br />
          <b>Email: gohsahn@gmail.com</b>
        </div>
      </div>
    </div>

  )
}

export default About
