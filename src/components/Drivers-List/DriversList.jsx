import React from 'react'
import './DriversList.css'
import ReactCountryFlag from "react-country-flag"
import DEFAULT from '../../assets/Profile-Images/Default.jpeg'
import ISAC from '../../assets/Profile-Images/isac-img.png'
import KIERAN from '../../assets/Profile-Images/Kieran.png'
import JOHAN from '../../assets/Profile-Images/Johan.png'
import KENNY from '../../assets/Profile-Images/Kenny.png'


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
    image1:  DEFAULT,
    nation: 'NL'
  },
  {
    id: 4,
    name: 'Kaynine22',
    team: 'McLaren',
    image1:  DEFAULT,
    nation: 'GB'
  },
  {
    id: 5,
    name: 'GibArn',
    team: 'Alpine',
    image1:  DEFAULT,
    nation: 'SE'
  },
  {
    id: 6,
    name: 'joaxli',
    team: 'Ferrari',
    image1:  JOHAN,
    nation: 'SE'
  },
  {
    id: 7,
    name: 'xF_Keninho70',
    team: 'AlphaTauri',
    image1:  KENNY,
    nation: 'BE'
  },
]

const DriversList = () => {
  return (
    <section id='drivers'>
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
                <h6>{team}</h6>
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