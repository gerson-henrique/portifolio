import React from 'react'
import { Container } from '../Container'
import "../../styles/colors.css"
import { BlackBoard } from '../BlackBoard'
import { Welcome } from '../Welcome'

export const Main = () => {
  return (
    <Container className='gradient'>
      <div className='logo'>Gero/ Projects/ Portifólio</div>
      <div className='border'/>
      <BlackBoard>
        <Welcome />
      </BlackBoard>

    </Container>
  )
}
