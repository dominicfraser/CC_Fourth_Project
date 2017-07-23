import { combineReducers } from 'redux'
import { isLoggedIn, authIsLoading, loginUName, loginPassword, createEmail, createPName, createPassword, createSelectedPrimaryOrg, createSelectedPrimaryGroup, allOrganisations, allGroups, allOrganisationsNames, drawerIsActive } from './splitReducers'

export default combineReducers({
    isLoggedIn,
    authIsLoading,
    loginUName,
    loginPassword,
    createEmail,
    createPName,
    createPassword,
    createSelectedPrimaryOrg,
    createSelectedPrimaryGroup,
    allOrganisations,
    allGroups,
    allOrganisationsNames,
    drawerIsActive
})