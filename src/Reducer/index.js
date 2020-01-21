import { combineReducers } from 'redux';
import { responsiveStateReducer } from 'redux-responsive'
import userReducer from './user';
import postCreationReducer from './postcreation';
import postReducer from './posts';


export default combineReducers({
    browser: responsiveStateReducer,
    user: userReducer,
    postcreation: postCreationReducer,
    posts: postReducer,
})
