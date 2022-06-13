import React from 'react'
import '../../index.css'
import './Header.css'

const Header = () => {
  return (
    <section className="header">
      <h2 className="title-large">
        BJF1
      </h2>
      <p>Welcome to BJ F1 Racing. The pinnacle of virtual racing - from 
        a certain point of view. Bette Jalle was founded in 2013 as a FIFA
        pro clubs team. The FIFA team is retired since a few years back but
        we keep on playing together for the fun of it - nowadays on the race track!
      </p>
      <div className="flex-row center">
      <a href="" className="btn btn-primary">Join us!</a>
      <a href="" className="btn secondary">Watch next race</a>
      </div>
    </section>
  )
}

export default Header