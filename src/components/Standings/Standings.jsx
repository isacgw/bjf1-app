import React from 'react'
import './Standings.css'
import ReactCountryFlag from "react-country-flag"
import { useState } from 'react'
import styled from 'styled-components'

import DEFAULT from '../../assets/Profile-Images/Default.jpeg'
import ISAC from '../../assets/Profile-Images/isac-img.png'
import KIERAN from '../../assets/Profile-Images/Kieran.png'
import JOHAN from '../../assets/Profile-Images/Johan.png'
import KENNY from '../../assets/Profile-Images/Kenny.png'

const drivers = [
  {
    id: 1,
    name: 'iiSAC97',
    team: 'Mercedes',
    image1:  ISAC,
    nation: 'SE',
    points: 18
  }, 
  {
    id: 2,
    name: 'xLetsGetFiscal',
    team: 'Ferrari',
    image1:  KIERAN,
    nation: 'GB',
    points: 118
  },
  {
    id: 3,
    name: 'XtraZinikaNL',
    team: 'Red Bull',
    image1:  DEFAULT,
    nation: 'NL',
    points: 47
  },
  {
    id: 4,
    name: 'Kaynine22',
    team: 'McLaren',
    image1:  DEFAULT,
    nation: 'GB',
    points: 18
  },
  {
    id: 5,
    name: 'GibArn',
    team: 'Alpine',
    image1:  DEFAULT,
    nation: 'SE',
    points: 32
  },
  {
    id: 6,
    name: 'joaxli',
    team: 'Ferrari',
    image1:  JOHAN,
    nation: 'SE',
    points: 24
  },
  {
    id: 7,
    name: 'xF_Keninho70',
    team: 'AlphaTauri',
    image1:  KENNY,
    nation: 'BE',
    points: 21
  },
]

const constructors = [
  {
    id: 1,
    teamName: "Mercedes",
    points: 71,
    logo: "https://cdn.worldvectorlogo.com/logos/mercedes-benz-9.svg",
    drivers: "iiSAC97 & TBD",
    teamClass: "mercedes"
  },
  {
    id: 2,
    teamName: "Ferrari",
    points: 110,
    logo: "https://cdn.worldvectorlogo.com/logos/ferrari-ges.svg",
    drivers: "xLetsGetFiscal & joaxli" 
  },
  {
    id: 3,
    teamName: "Red Bull Racing",
    points: 120,
    logo: "https://logos-world.net/wp-content/uploads/2020/11/Red-Bull-Logo.png",
    drivers: "xLetsGetFiscal & joaxli"
  },
  {
    id: 4,
    teamName: "Alpine",
    points: 65,
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Alpine_F1_Team_Logo.svg/2233px-Alpine_F1_Team_Logo.svg.png",
    drivers: "xLetsGetFiscal & joaxli"
  },
  {
    id: 5,
    teamName: "McLaren F1 Team",
    points: 65,
    logo: "https://cdn.worldvectorlogo.com/logos/mclaren-racing-logo.svg",
    drivers: "xLetsGetFiscal & joaxli"
  },
  {
    id: 6,
    teamName: "AlphaTauri",
    points: 65,
    logo: "https://cdn.worldvectorlogo.com/logos/scuderia-alpha-tauri.svg",
    drivers: "xLetsGetFiscal & joaxli"
  },
  {
    id: 7,
    teamName: "Alfa Romeo",
    points: 65,
    logo: "https://cdn.worldvectorlogo.com/logos/alfa-romeo-4.svg",
    drivers: "xLetsGetFiscal & joaxli"
  },
  {
    id: 8,
    teamName: "Haas",
    points: 65,
    logo: "https://cdn.worldvectorlogo.com/logos/haas-f1-team-logo.svg",
    drivers: "xLetsGetFiscal & joaxli"
  },
  {
    id: 9,
    teamName: "Williams",
    points: 65,
    logo: "https://cdn.worldvectorlogo.com/logos/williams-racing-1.svg",
    drivers: "xLetsGetFiscal & joaxli"
  },
  {
    id: 10,
    teamName: "Aston Martin",
    points: 65,
    logo: "https://cdn.worldvectorlogo.com/logos/aston-martin-1.svg",
    drivers: "xLetsGetFiscal & joaxli"
  },
]

const Standings = () => {

  const [activeTab, setActiveTab] = useState("drivers")

  return (
    <section>

      <h2>STANDINGS</h2>
      
      <div className='buttons'>
      <Button className={activeTab === 'drivers' ? 'active' : ''} 
            onClick={() => setActiveTab('drivers')}>DRIVERS</Button>
          
          <Button className={activeTab === 'constructors' ? 'active' : ''} 
            onClick={() => setActiveTab('constructors')}>CONSTRUCTORS</Button>
      </div>


     { activeTab === 'drivers' && 
     <ol className="driver-standings">
            <div className="infos">
          <h4>Driver</h4>
          <h4>Points</h4>
        </div>
      {
          drivers && drivers
          .sort( (a,b) => a.points > b.points ? -1 :1)
          .map(({id, name, team, image1, nation, points}) =>{
            return (
              <li key={id} className='driver-item'>
                <div className="driver-item-image">
                <img src={image1} alt="" />
                </div>
                <div className="driver-item-infos">
                <h4>{name} <ReactCountryFlag countryCode={nation} /></h4>
                <h6>{team}</h6>
            </div>
            <h3>{points}</h3>
            {/* <ReactCountryFlag countryCode={nation} /> */}
        </li>
            )
          })
        }
      </ol>
}


{/* CONSTRUCTORS STANDINGS */}

    { activeTab === 'constructors' &&  <ol className="driver-standings">
    <div className="infos">
          <h4>Team</h4>
          <h4>Points</h4>
        </div>
      {
        
          constructors && constructors
          .sort( (a,b) => a.points > b.points ? -1 :1)
          .map(({ id, teamName, points, logo, drivers }) =>{
            return (
              <li key={id} className='driver-item'>
                <div className="constructors-logo">
                <img src={logo} alt=""/>
                </div>
                
                <div className="driver-item-infos">
                <h4>{teamName}</h4>
                <h6>{drivers}</h6>
            </div>
            <h3>{points}</h3>
            {/* <ReactCountryFlag countryCode={nation} /> */}
        </li>
            )
          })
        }
        </ol>
}
    </section>
  )
}

const Button = styled.button`
  padding: 1rem 1rem;
  color: var(--color-primary);
  background: transparent;
  border: 2px solid var(--color-primary);
  border-radius: 2rem;
  
  font-weight: 900;
  font-size: .8rem;
    cursor: pointer;
`

export default Standings