import React from 'react'
import '../../index.css'
import './Header.css'
import BjLogo from '../../assets/icons/BJ Logo.png'

const Header = () => {
  return (
    <section id="header">
      <h2 className="title-large">
        BJF1
      </h2>
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