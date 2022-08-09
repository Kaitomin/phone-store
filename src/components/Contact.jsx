import React from 'react'

const Contact = () => {
  return (
    <div className='container contact d-flex justify-content-around flex-column my-5'>
      <div className='d-flex flex-column flex-lg-row col-12 gap-5 pb-5'>
        <form className='col-12 col-lg-6'>
          <h2 className='pb-2 border-bottom border-dark'>Write us a message...</h2>
          <div className='mb-3 ps-3'>
            <label htmlFor='email' className='form-label'>Email</label>
            <input type='email' className='form-control' id='email' placeholder='user@example.com' />
          </div>
          <div className='mb-3 ps-3'>
            <label htmlFor='message' className='form-label'>Message</label>
            <textarea className='form-control' id='message' rows='3' placeholder='Hello' style= {{resize: 'none'}}></textarea>
          </div>
          <button className='send-btn float-end border border-dark bg-white text-black'><i className="fa-solid fa-envelope"></i> Submit</button>
        </form>
        <div className='col-12 col-lg-6'>
          <h2 className='pb-2 border-bottom border-dark'>...or contact us</h2>
          <p className='ps-3'><i className="fa-solid fa-envelope"></i> smth@gmail.com</p> 
          <p className='ps-3'><i className="fa-solid fa-phone"></i> 00 00 00 00 11</p>
          <p className='ps-3'><i className="fa-solid fa-location-dot"></i> Yokohamakoen, Naka Ward, Yokohama, Kanagawa 231-0022, Japan</p> 
        </div>
      </div>
      <div className='col-12'>
        <iframe
          width='100%'
          height='600'
          frameBorder='0'
          referrerPolicy='no-referrer-when-downgrade'
          src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_MAPS_API_KEY}&q=Stadium,Yokohama+Japan`}
          allowFullScreen>
        </iframe>
      </div>
    </div>
  )
}

export default Contact