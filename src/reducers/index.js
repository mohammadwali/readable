import {combineReducers} from 'redux'
import { reducer as formReducer } from 'redux-form';
import postsReducer from './post';
import postsDetailsReducer from './postDetails';



export default combineReducers({
    posts: postsReducer,
    postDetails: postsDetailsReducer,
    form: formReducer
})