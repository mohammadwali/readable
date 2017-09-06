import * as types from './actionTypes'
import {fetch} from '../utils/authorizedFetch';

export function loadPostsSuccess(posts) {
    return {type: types.LOAD_POSTS_SUCCESS, posts};
}


export function loadPosts() {

    return function (dispatch) {

        return fetch("http://localhost:5001/posts")
            .then(response => response.json())
            .then(posts => dispatch(loadPostsSuccess(posts)))
            .catch(error => {
                throw(error)
            })
    }
}