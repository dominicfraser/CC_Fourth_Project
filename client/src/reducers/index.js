import { combineReducers } from 'redux'
import { isLoggedIn, authIsLoading, drawerIsActive } from './splitReducers'

export default combineReducers({
    isLoggedIn,
    authIsLoading,
    drawerIsActive
})