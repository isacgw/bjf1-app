import React from 'react'
import '../../index.css'
import './Header.css'
import BjLogo from '../../assets/icons/BJ Logo.png'
import Timer from './Timer'
import WP from '../../assets/wp-3.png'

const Header = () => {
  return (
    <section id="header">
      <img src='https://i.pinimg.com/originals/14/36/c0/1436c0cf2f90e133bd8512036d76c55d.jpg' alt="" className='bg-img-desktop' />
      <img src={WP} alt="" className='bg-img-mobile' />
      <h2 className="title-large">
        BJF1
      </h2>
      <h2 className="reloaded">RELOADED</h2>
      <h3>Season starts in:</h3>
      <Timer
      countdownTimestampsMs={1657825200000}/>
      <div id="header-icon"><img src={BjLogo} alt="" /></div>
      <p>Welcome to BJ F1 Racing. A virtual racing league that values safe, competitive driving, but most importantly a friendly atmosphere. Bette Jalle was founded in 2013 as a FIFA pro clubs team. The FIFA team hung up their football boots a few years back but we have a strong core who keep on playing together for the fun of it - nowadays on the race track!
      </p>
      <div className="flex-row center">
      <a href="" className="btn btn-primary">Join us!</a>
      <a href="https://www.twitch.tv/bettejalle" className="btn secondary" target={"_blank"}>Watch next race</a>
      </div>
    </section>
  )
}

export default Header