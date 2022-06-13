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
      <p>Welcome to BJ F1 Racing. The pinnacle of virtual racing - from 
        a certain point of view. Bette Jalle was founded in 2013 as a FIFA
        pro clubs team. The FIFA team is retired since a few years back but
        we keep on playing together for the fun of it - nowadays on the race track!
      </p>
      <div className="flex-row center">
      <a href="" className="btn btn-primary">Join us!</a>
      <a href="https://www.twitch.tv/bettejalle" className="btn secondary" target={"_blank"}>Watch next race</a>
      </div>
    </section>
  )
}

export default Header