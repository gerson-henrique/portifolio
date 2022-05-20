import React from 'react'
import { BestProjects } from './BestProjects'
import { Container } from './Container'
import { ProjectCanvas } from './ProjectCanvas'

export const Projects = () => {
  return (
    <Container>
      <ProjectCanvas>
        <BestProjects></BestProjects>
        </ProjectCanvas>
    </Container>
  )
}
