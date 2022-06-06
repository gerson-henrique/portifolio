import React from 'react'
import getRepos from '../../services/GithubAPI'

export const Projects =  () => {

  let loading = true
  const repos =  getRepos().then( 
  loading = false
  )
  return (
    <div>
    <div>Projects</div>
    { loading === true ? (<>LOADING...</>) : console.log(repos) }
    </div>
  )
}
