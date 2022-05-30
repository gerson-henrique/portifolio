import React from 'react'

export default function ImageText() {
  return (
    <div>
      <image src={this.props.photo} />
      <p>{this.props.children}</p>
    </div>
  )
}
