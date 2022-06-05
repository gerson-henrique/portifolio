import React from 'react'
import "../styles/menu.css"
import pj from '../assets/icons8-pen-50.png'
import me from '../assets/icons8-person-64.png'
import stk from '../assets/icons8-toolbox-50.png'
import gm from '../assets/icons8-mail-50.png'

export const Menu = () => {
  return (
    
    <div className='master'>
      <div className='iconnav'> <img src={pj} alt="projects" /> <img src={me} alt="me" /> <img src={stk} alt="habilidades" /> <img src={gm} alt="contact" /> </div>
    </div>
  )
}
