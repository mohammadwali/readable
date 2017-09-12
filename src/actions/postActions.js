import * as types from './actionTypes'
import {fetch} from '../utils/authorizedFetch';
import uuid from 'uuid/v4';
import {reset} from 'redux-form';

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
        return fetch(`http://localhost:5001/posts/${postId}`,
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

export function updatePostComments(postId, comments) {
    return {type: types.UPDATE_POST_COMMENTS, postId, comments}
}

export function loadPostComments(postId) {
    return dispatch => {

        //updating the server
        return fetch(`http://localhost:5001/posts/${postId}/comments`)
            .then(response => dispatch(updatePostComments(postId, response)))
            .catch(error => {
                throw(error)
            })
    }
}

export function postDetailsLoaded(post) {
    return {type: types.POST_DETAILS_LOADED, post}
}


export function loadPostById(postId) {
    return dispatch => {
        return fetch(`http://localhost:5001/posts/${postId}`)
            .then(response => {

                dispatch(postDetailsLoaded(response));

                loadPostComments(postId)(dispatch);
            })
            .catch(error => {
                throw(error)
            })
    }
}

export function addNewComment({comment, name, email}, postId) {

    /*
     POST /comments
     USAGE:
     Add a comment to a post

     PARAMS:
     id: Any unique ID. As with posts, UUID is probably the best here.
     timestamp: timestamp. Get this however you want.
     body: String
     author: String
     parentId: Should match a post id in the database.
     */
    return dispatch => {
        return fetch(`http://localhost:5001/comments`, {
            method: "POST",
            body: JSON.stringify({
                id: uuid(),
                author: name,
                body: comment,
                parentId: postId,
                timestamp: Date.now()
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {

                dispatch(reset('comment-form'));
                dispatch(loadPostComments(postId));

            })
            .catch(error => {
                throw(error)
            })
    }
}