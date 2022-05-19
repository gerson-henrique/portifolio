import React from 'react'
import { Hyper } from './Hyper'
import { NeonCircle } from './NeonCircle'
import '../styles/Welcome.css'

export const WelcomeLogo = () => {
  return (
    <div className='logo' >
       <NeonCircle>
      <Hyper > BEM VIND@</Hyper>
      </NeonCircle>
    </div>)
}
