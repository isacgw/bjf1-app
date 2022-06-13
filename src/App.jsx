import React from 'react'
import Header from './components/Header/Header.jsx'
import Drivers from './components/Drivers-List/DriversList'
import Standings from './components/Standings/Standings'
import Calendar from './components/Calendar/Calendar'
import Highlights from './components/Highlights/Highlights.jsx'

const App = () => {
  return (
    <>
        <Header />
        <Drivers />
        <Highlights/>
        <Standings />
        <Calendar />
    </>
  )
}

export default App