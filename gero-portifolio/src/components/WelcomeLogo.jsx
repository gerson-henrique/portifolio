import React from 'react'

import { Hyper } from './Hyper'
import '../styles/Welcome.css'
import { Marker } from './Marker'

export const WelcomeLogo = () => {
  return (
    <div className='logo' >
     <div>
      <Hyper > GERO</Hyper>
      <Marker> FULLSTACK WEB DEVELOPER </Marker>
      <button>Download CV</button>
      </div>
    </div>)
}
