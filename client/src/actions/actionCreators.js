import ApiCommunicatorHelper from '../helpers/apiCommunicatorHelper'

const apiCommunicatorHelper = new ApiCommunicatorHelper()


export function authIsLoading(bool) {
    return {
        type: 'AUTH_IS_LOADING',
        isLoading: bool
    };
}

// export function itemsFetchDataSuccess(items) {
//     return {
//         type: 'ITEMS_FETCH_DATA_SUCCESS',
//         items
//     };
// }

export function isLoggedIn(bool) {
    return {
        type: 'USER_IS_AUTHORISED',
        isLoggedIn: bool
    };
}

export function checkLoggedIn(url) {
    return (dispatch) => {
        dispatch(authIsLoading(true));
console.log('in actionCreators')

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

    };
}