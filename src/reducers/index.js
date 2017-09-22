import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form';
import postsReducer from './post';
import postsDetailsReducer from './postDetails';
import categoriesReducer from './categories';


export default combineReducers({
    posts: postsReducer,
    postDetails: postsDetailsReducer,
    form: formReducer,
    categories: categoriesReducer
})