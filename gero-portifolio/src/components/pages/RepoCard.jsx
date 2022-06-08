import React from 'react'

import "../../styles/card.css"

export const RepoCard = (props) => {
  return (
    <div>
      <div>{props.name}</div>
      <div> 
        <a target="_blank" href={props.html_url}>
        <img alt="Qries" src="https://lh3.googleusercontent.com/NGPrjka2ai0w7sfhxkxCwtOSh2wVyEZMdtrVxI4vrA22ebA_fcyl9PSvhTaCYXSWh0A68ZhvXhVZ4U-Nnp3v9IfoXg5o5H1tjjK97cs"/>
     </a> 
        {props.description} 
        </div>
    </div>
  )
}
