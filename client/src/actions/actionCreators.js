import ApiCommunicatorHelper from '../helpers/apiCommunicatorHelper'

const apiCommunicatorHelper = new ApiCommunicatorHelper()

export function authIsLoading(bool) {
    return {
        type: 'AUTH_IS_LOADING',
        authIsLoading: bool
    };
}

export function isLoggedIn(bool) {
    return {
        type: 'USER_IS_AUTHORISED',
        isLoggedIn: bool
    };
}

export function checkLoggedIn() {
    return (dispatch) => {
        dispatch(authIsLoading(true))
// console.log('in actionCreators')
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

