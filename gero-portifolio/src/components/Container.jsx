import React from 'react'

export const Container = (props) => {
  return (
    <div className={props.className}>{props.children}
    </div>
  )
}
