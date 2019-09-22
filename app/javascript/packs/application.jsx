import React from 'react'
import ReactDOM from 'react-dom'
import './bootstrap.scss';
import Hello from 'components/hello'

const Application = () => (
  <Hello name='React' />
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Application />,
    document.body.appendChild(document.createElement('div')),
  )
})
