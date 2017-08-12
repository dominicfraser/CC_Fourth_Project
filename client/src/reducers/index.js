import { combineReducers } from 'redux'
import { isLoggedIn, authIsLoading, loginUName, loginPassword,  allOrganisations, allGroups, allOrganisationsNames, allGroupsNames, drawerIsActive } from './splitReducers'

export default combineReducers({
    isLoggedIn,
    authIsLoading,
    loginUName,
    loginPassword,
    allOrganisations,
    allGroups,
    allOrganisationsNames,
    allGroupsNames,
    drawerIsActive
})