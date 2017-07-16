import React from 'react'
import { render } from 'react-dom'

import App from './containers/app'

import { Provider } from 'react-redux';
import configureStore from './store/configureStore'


const store = configureStore()

window.addEventListener('load', () => {
  const targetDiv = document.getElementById('app')

  render(
    <Provider store={store}>
      <App />
    </Provider>, targetDiv)
})
