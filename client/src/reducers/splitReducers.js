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

export function drawerIsActive(state = false, action) {
    switch (action.type) {
        case 'DRAWER_IS_ACTIVE':
            return action.drawerIsActive

        default:
            return state
    }
}
