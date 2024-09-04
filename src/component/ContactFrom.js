import React from 'react'
import "../component/ContactStyle.css"

const ContactFrom = () => {
  return (
    <div className='form-container'>
      <h1>Send a message to us!</h1>
      <form>
        <input placeholder='name'/>
        <input placeholder='Email'/>
        <input placeholder='Subject'/> 
        <textarea placeholder='Message...' rows="4"/>
        <button>Send Message</button>
      </form>
    </div>
  )
}

export default ContactFrom
