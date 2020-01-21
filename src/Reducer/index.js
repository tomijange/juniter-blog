import { combineReducers } from 'redux';
import { responsiveStateReducer } from 'redux-responsive'
import userReducer from './user';


export default combineReducers({
    browser: responsiveStateReducer,
    user: userReducer,
})
