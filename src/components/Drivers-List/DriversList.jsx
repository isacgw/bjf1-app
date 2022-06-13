import React from 'react'
import './DriversList.css'
import ReactCountryFlag from "react-country-flag"
import ISAC from '../../assets/isac-img.png'
import KIERAN from '../../assets/Kieran.png'
import JOHAN from '../../assets/Johan.png'

const data = [
  {
    id: 1,
    name: 'iiSAC97',
    team: 'Mercedes',
    image1:  ISAC,
    nation: 'SE'
  }, 
  {
    id: 2,
    name: 'xLetsGetFiscal',
    team: 'Ferrari',
    image1:  KIERAN,
    nation: 'GB'
  },
  {
    id: 3,
    name: 'XtraZinikaNL',
    team: 'Red Bull',
    image1:  ISAC,
    nation: 'NL'
  },
  {
    id: 4,
    name: 'Kaynine22',
    team: 'McLaren',
    image1:  KIERAN,
    nation: 'GB'
  },
  {
    id: 5,
    name: 'GibArn',
    team: 'Alpine',
    image1:  ISAC,
    nation: 'SE'
  },
  {
    id: 6,
    name: 'joaxli',
    team: 'Ferrari',
    image1:  JOHAN,
    nation: 'SE'
  },
]

const DriversList = () => {
  return (
    <section id='drivers'>
      <h5>Meet our</h5>
      <h2>Drivers</h2>
      <ul className="drivers-list">
        {
          data.map(({id, name, team, image1, nation}) =>{
            return (
              <li key={id} className='driver-item'>
                <div className="driver-item-image">
                <img src={image1} alt="" />
                </div>
                <div className="driver-item-infos">
                <h4>{name} <ReactCountryFlag countryCode={nation} /></h4>
                <h5>{team}</h5>
            </div>
            {/* <ReactCountryFlag countryCode={nation} /> */}
        </li>
            )
          })
        }
      </ul>
    </section>
  )
}

export default DriversList