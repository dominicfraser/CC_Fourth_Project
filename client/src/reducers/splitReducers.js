export function authIsLoading(state = false, action) {
    switch (action.type) {
        case 'AUTH_IS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function isLoggedIn(state = false, action) {
    switch (action.type) {
        case 'USER_IS_AUTHORISED':
            return action.isLoggedIn;

        default:
            return state;
    }
}