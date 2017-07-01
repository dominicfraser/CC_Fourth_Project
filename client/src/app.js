import React from 'react'
import { render } from 'react-dom'
import { HashRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import configureStore from './store/configureStore'
import Leaderboard from './containers/leaderboard'
import AddGame from './containers/addGame'
import Profile from './containers/profile'
import LoginPage from './containers/loginPage'

const store = configureStore()

window.addEventListener('load', () => {
  const targetDiv = document.getElementById('app')

  render(
    <Provider store={store}>

      <HashRouter>
        <div>
          <Route path='/main' component={Leaderboard} />
          <Route exact path='/' component={Leaderboard} />
          <Route path='/addGame' component={AddGame} />
          <Route path='/profile' component={Profile} />
          <Route path='/login' component={LoginPage} />

        </div>
      </HashRouter>

    </Provider>, targetDiv)
})

