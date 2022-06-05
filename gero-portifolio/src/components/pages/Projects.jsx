import React from 'react'
import getRepos from '../../services/GithubAPI'

export const Projects = async () => {
  let loading = true
  const repos = await getRepos(); 
  loading = false;
  return (
    <div>
    <div>Projects</div>
    { loading === true ? (<>LOADING...</>) : repos.map((rp)=> <>rp.id</>) }
    </div>
  )
}
