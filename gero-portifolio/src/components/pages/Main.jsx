import React from 'react'
import Container from '../Container'
import MySelf from '../../assets/IMG_1181.jpg'
import ImageText from '../ImageText'

export default function Main() {
  return (
    <Container>
        <ImageText photo={MySelf}>
          VAMO NESSA
        </ImageText>
    </Container>
  )
}
