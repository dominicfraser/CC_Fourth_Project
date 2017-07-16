import { combineReducers } from 'redux'
import { isLoggedIn, authIsLoading, loginUName, loginPassword, drawerIsActive } from './splitReducers'

export default combineReducers({
    isLoggedIn,
    authIsLoading,
    loginUName,
    loginPassword,
    drawerIsActive
})