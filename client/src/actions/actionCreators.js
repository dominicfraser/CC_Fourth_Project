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

export function createEmail(email) {
    return {
        type: 'CREATE_EMAIL',
        createEmail: email
    }
}

export function createPName(p_name) {
    return {
        type: 'CREATE_PNAME',
        createPName: p_name
    }
}

export function createPassword(password) {
    return {
        type: 'CREATE_PASSWORD',
        createPassword: password
    }
}

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

export function checkDrawerIsActive(bool) {
    return {
        type: 'DRAWER_IS_ACTIVE',
        drawerIsActive: bool
    }
}

