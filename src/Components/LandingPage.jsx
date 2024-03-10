import React from 'react'
import SvgComponent from './SvgComponent'
import Header from './Header'
import { Link } from 'react-router-dom'


function LandingPage() {
  return (
    <>
    <Header/>
    <div className="container">
      <div className="row">
        <div className="col-lg-6 mt-5" >
          <h1 style={{fontSize:'60px'}}> Daily Quiz,Daily </h1>
          <h1>Bonus-Play Today!</h1>
          <div className="btnDiv mt-5 ">
         <Link to={'/quiz'}> <button className='p-1 btn btn-primary rounded' >Play Today<i class="fa-solid fa-arrow-right ms-2"></i></button></Link>
          </div>
          
        </div>
        <div className="col-lg-6"></div>
      </div>
    </div>

      <SvgComponent />
    </>
  )
}

export default LandingPage