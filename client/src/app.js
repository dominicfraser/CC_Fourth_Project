import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter, Route} from 'react-router-dom'
import Leaderboard from './containers/leaderboard'

window.addEventListener('load', () => {
  const targetDiv = document.getElementById('app')
  ReactDOM.render(
    <HashRouter>
      <div>
        <Route path='/main' component={Leaderboard} />
        <Route exact path='/' component={Leaderboard} />
      </div>
    </HashRouter>, targetDiv)
})
