import React, { useState } from 'react'

function Contact() {
  const [name, setName] = useState(null)
  const [email, setEmail] = useState(null)
  const [message, setMessage] = useState(null)



  const onSubmit = () => {
    console.log(name, email);
    alert('Your contact has been submitted!')
  }
  return (
    <div className='section' id='contact'>
      <h1>Contact</h1>
      <br /> <br />
      <div className='contact-container'>
        <form onSubmit={onSubmit}>
          <label>Name</label>
          <br />
          <input required type="text" value={name} onChange={(e) => setName(e.target.value)} />
          <br />
          <br />

          <label>Email</label>
          <br />
          <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <br />
          <br />

          <label>Message</label>
          <br />
          <input type="text" />
          <br />
          <br />

          <button className='button' >Send</button>
        </form>
      </div>
    </div >
  )
}

export default Contact
