import React from 'react'
import "../styles/menu.css"
import pj from '../assets/bookmark.svg'
import me from '../assets/user.svg'
import stk from '../assets/graduation-cap.svg'
import gm from '../assets/comment-alt.svg'

export const Menu = () => {
  return (
    
    <div className='master'>
      <div className='iconnav'> <img src={pj} alt="me" /> <img src={me} alt="me" /> <img src={stk} alt="habilidades" /> <img src={gm} alt="contact" /> </div>
    </div>
  )
}
