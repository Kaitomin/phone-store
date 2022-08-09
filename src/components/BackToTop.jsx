import React from 'react'

const BackToTop = () => {
  return (
    <>
      <i className="fa-solid fa-angle-up fa-2x d-block d-md-none top-btn d-flex justify-content-center align-items-center" onClick={() => window.scrollTo(0, 0)}></i>
    </>
  )
}

export default BackToTop