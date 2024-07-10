import React from 'react'
import './Header.css'
import Navbar from '../Navbar/CustomNavbar'

function Header() {
  return (
    <div className='first-page'>
      <Navbar />
      <div className="main-intro">
        <div className="intro">
          <h1 className='main-head'>Unlimited movies, TV shows and more</h1>
          <h3 className="secondHead">Watch anywhere. Cancel anytime.</h3>
          <h5 className='thirdHead'>Ready to watch? Enter your email to create or restart your membership.</h5>
        </div>
        <div className='login-form' >
          <form action="#">
            <input className='input-email' type="email" name="email" placeholder="Email Address" /><br />
            <button className='get-started' type="submit">Get started </button>
          </form>


        </div>
      </div>
    </div>
  )
}

export default Header
