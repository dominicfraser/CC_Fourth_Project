import { combineReducers } from 'redux';
import { isLoggedIn, authIsLoading } from './splitReducers';

export default combineReducers({
    isLoggedIn,
    authIsLoading
});