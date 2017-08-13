export function authIsLoading(state = false, action) {
    switch (action.type) {
        case 'AUTH_IS_LOADING':
            return action.authIsLoading
        default:
            return state
    }
}

export function isLoggedIn(state = false, action) {
    switch (action.type) {
        case 'USER_IS_AUTHORISED':
            return action.isLoggedIn
        default:
            return state
    }
}

export function loginUName(state = "", action) {
    switch (action.type) {
        case 'LOGIN_U_NAME':
            return action.loginUName
        default:
            return state
    }
}

export function loginPassword(state = "", action) {
    switch (action.type) {
        case 'LOGIN_PASSWORD':
            return action.loginPassword
        default:
            return state
    }
}

export function allOrganisations(state = "", action) {
    switch (action.type) {
        case 'All_ORGANISATIONS':
            return action.allOrganisations
        default:
            return state
    }
}

export function allOrganisationsNames(state = "", action) {
    switch (action.type) {
        case 'All_ORGANISATIONS_NAMES':
            return action.allOrganisationsNames
        default:
            return state
    }
}

export function allGroups(state = "", action) {
    switch (action.type) {
        case 'All_GROUPS':
            return action.allGroups
        default:
            return state
    }
}

export function allGroupsNames(state = "", action) {
    switch (action.type) {
        case 'All_GROUPS_NAMES':
            return action.allGroupsNames
        default:
            return state
    }
}

// export function playersDetails(state = "", action) {
//     switch (action.type) {
//         case 'ALL_EMAILS' :
//             return action.allEmails
//         default:
//             return state
//     }
// }

export function drawerIsActive(state = false, action) {
    switch (action.type) {
        case 'DRAWER_IS_ACTIVE':
            return action.drawerIsActive
        default:
            return state
    }
}
