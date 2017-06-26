import { combineReducers } from 'redux';
import { isLoggedIn, itemsHasErrored, itemsIsLoading } from './splitReducers';

export default combineReducers({
    isLoggedIn,
    itemsHasErrored,
    itemsIsLoading
});