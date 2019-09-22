import React from 'react'

const Hello = props => (
  <div className="container">
    <div className="jumbotron">
      <h1>Hello {props.name || 'DERP'}!</h1>
    </div>
  </div>
)

export default Hello
