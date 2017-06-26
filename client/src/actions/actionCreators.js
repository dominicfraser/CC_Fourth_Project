import fetch from 'isomorphic-fetch'
require('es6-promise').polyfill();
// require('isomorphic-fetch');
import ApiCommunicatorHelper from '../helpers/apiCommunicatorHelper'


export function itemsHasErrored(bool) {
    return {
        type: 'ITEMS_HAS_ERRORED',
        hasErrored: bool
    };
}

export function itemsIsLoading(bool) {
    return {
        type: 'ITEMS_IS_LOADING',
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

export function itemsFetchData(url) {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));
console.log('in actionCreators')
//         fetch(url)
//             .then((response) => {
//                 if (!response.ok) {
//                     throw Error(response.statusText);
//                 }
// console.log('response ok')

//                 dispatch(itemsIsLoading(false));

//                 return response;
//             })
//             .then((response) => response.json())
//             .then((items) => dispatch(isLoggedIn(true)))
//             .catch(() => dispatch(itemsHasErrored(true)));
    let apiCommunicatorHelper = new ApiCommunicatorHelper()
    apiCommunicatorHelper.checkLoggedIn((check) => {
          if(check.description === 'user is logged in'){
            dispatch(isLoggedIn(true))
            dispatch(itemsIsLoading(false))
          } else {
            dispatch(isLoggedIn(false))
            dispatch(itemsIsLoading(false))
          }
        })

    };
}