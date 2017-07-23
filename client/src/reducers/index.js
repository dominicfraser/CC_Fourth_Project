import { combineReducers } from 'redux'
import { isLoggedIn, authIsLoading, loginUName, loginPassword, createEmail, createPName, createPassword, drawerIsActive } from './splitReducers'

export default combineReducers({
    isLoggedIn,
    authIsLoading,
    loginUName,
    loginPassword,
    createEmail,
    createPName,
    createPassword,
    drawerIsActive
})