import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import './bootstrap.scss'
import Hello from 'components/hello'
import store from '../store/store'

const Application = () => (
  <Provider store={store}>
    <Hello name='React' />
  </Provider>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Application />,
    document.body.appendChild(document.createElement('div')),
  )
})
