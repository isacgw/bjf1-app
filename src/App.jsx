import React from 'react'
import Header from './components/Header/Header.jsx'
import Drivers from './components/Drivers-List/DriversList'
import Standings from './components/Standings/Standings'
import Calendar from './components/Calendar/Calendar'

const App = () => {
  return (
    <>
        <Header />
        <Drivers />
        <Standings />
        <Calendar />
    </>
  )
}

export default App