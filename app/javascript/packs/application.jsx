import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

// TODO: should have a scss file per component
import './styles.scss'
import './bootstrap.scss'


import store from '../store/store'
import QuotesListContainer from '../containers/quotes_list_container.jsx'

const Application = () => (
  <Provider store={store}>
    <QuotesListContainer />
  </Provider>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Application />,
    document.body.appendChild(document.createElement('div')),
  )
})
