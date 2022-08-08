import React from 'react'

const Contact = () => {
  return (
    <div className='container d-flex justify-content-around my-5'>
      <form>
        <div className='d-flex flex-column'>
          <label>Username</label>
          <input type='text' placeholder='Username' className='border-0 border-bottom border-grey mb-3'></input>
        </div>
        <div className='d-flex flex-column'>
          <label>Email</label>
          <input type='email' placeholder='Email' className='border-0 border-bottom border-grey mb-3'></input>
        </div>
        <div className='d-flex flex-column'>
          <label>Message</label>
          <textarea placeholder='Your message' className='border-0 border-bottom border-grey'  />
        </div>
        <button className='btn'><i class="fa-solid fa-share"></i> Submit</button>
      </form>
      <div>

      </div>
    </div>
  )
}

export default Contact