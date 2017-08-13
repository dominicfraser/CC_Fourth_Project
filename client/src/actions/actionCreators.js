import ApiCommunicatorHelper from '../helpers/apiCommunicatorHelper'

const apiCommunicatorHelper = new ApiCommunicatorHelper()

export function authIsLoading(bool) {
    return {
        type: 'AUTH_IS_LOADING',
        authIsLoading: bool
    }
}
export function isLoggedIn(bool) {
    return {
        type: 'USER_IS_AUTHORISED',
        isLoggedIn: bool
    }
}

//LOGIN USER
export function loginUName(u_name) {
    return {
        type: 'LOGIN_U_NAME',
        loginUName: u_name
    }
}
export function loginPassword(password) {
    return {
        type: 'LOGIN_PASSWORD',
        loginPassword: password
    }
}

//ALL
export function allOrganisations(organisations) {
    return {
        type: 'All_ORGANISATIONS',
        allOrganisations: organisations
    }
}
export function allOrganisationsNames(o_names) {
    return {
        type: 'All_ORGANISATIONS_NAMES',
        allOrganisationsNames: o_names
    }
}
export function allGroups(groups) {
    return {
        type: 'All_GROUPS',
        allGroups: groups
    }
}
export function allGroupsNames(g_names) {
    return {
        type: 'All_GROUPS_NAMES',
        allGroupsNames: g_names
    }
}
// export function allEmails(emails) {
//     return {
//         type: 'ALL_EMAILS',
//         allEmails: emails
//     }
// }

export function checkLoggedIn() {
    return (dispatch) => {
        dispatch(authIsLoading(true))
    apiCommunicatorHelper.checkLoggedInHandleError((check) => {
console.log('in checkLoggedIn saying user is logged in')
console.log('check return value', check)
            dispatch(isLoggedIn(true))
            dispatch(authIsLoading(false))

        }, (err) => {
console.log('in checkLoggedIn saying user is not logged in')
            dispatch(isLoggedIn(false))
            dispatch(authIsLoading(false))
        })
    }
}

export function findAllOrgs(){
    return (dispatch) => {
        apiCommunicatorHelper.allOrganisations((organisations) => {
            dispatch(allOrganisations(organisations))
            let o_names = []
            organisations.forEach((organisation) => {
                o_names.push(organisation.o_name)
            })
            dispatch(allOrganisationsNames(o_names))
        })
    }
}
export function findAllGroups(){
    return (dispatch) => {
        apiCommunicatorHelper.allGroups((groups) => {
            dispatch(allGroups(groups))
            let g_names = []
            groups.forEach((group) => {
                g_names.push(group.g_name)
            })
            dispatch(allGroupsNames(g_names))
        })
    }
}
// export function findAllPlayerDetails(){
//     return (dispatch) => {
//         apiCommunicatorHelper.allPlayers((players) => {
//             let emails = []
//             players.forEach((player) => {
//                 emails.push(player.email)
//             })
//             dispatch(allEmails(emails))
//         })
//     }
// }

export function checkDrawerIsActive(bool) {
    return {
        type: 'DRAWER_IS_ACTIVE',
        drawerIsActive: bool
    }
}