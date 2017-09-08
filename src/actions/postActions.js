import * as types from './actionTypes'
import {fetch} from '../utils/authorizedFetch';

export function loadPostsSuccess(posts) {
    return {type: types.LOAD_POSTS_SUCCESS, posts};
}


export function loadPosts() {

    return dispatch => {

        return fetch("http://localhost:5001/posts")
            .then(posts => dispatch(loadPostsSuccess(posts)))
            .catch(error => {
                throw(error)
            })
    }
}


export function updateVote(voteType, postId) {
    return {type: types.UPDATE_POSTS_SCORE, postId, voteType}
}


export function updatePostVote(type, postId) {
    return dispatch => {
        //updating the app
        dispatch(updateVote(type, postId));

        //updating the server
        return fetch("http://localhost:5001/posts/" + postId,
            {
                method: "POST",
                body: JSON.stringify({
                    option: type
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .catch(error => {
                throw(error)
            })
    }
}