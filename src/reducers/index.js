import {combineReducers} from 'redux'
import postsReducer from './post';
import postsDetailsReducer from './postDetails';


export default combineReducers({
    posts: postsReducer,
    postDetails: postsDetailsReducer
})