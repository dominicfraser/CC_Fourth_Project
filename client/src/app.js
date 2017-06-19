import React from 'react'
import ReactDOM from 'react-dom'
import Leaderboard from './containers/leaderboard'

window.addEventListener('load', () => {
  const targetDiv = document.getElementById('app')
  ReactDOM.render(<Leaderboard />, targetDiv)
})
