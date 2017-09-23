import * as types from './actionTypes'
import {fetch} from '../utils/authorizedFetch';
import uuid from 'uuid/v4';
import {reset} from 'redux-form';

export function loadPostsSuccess(posts) {
    return {type: types.LOAD_POSTS_SUCCESS, posts};
}


export function loadPosts(category) {

    return dispatch => {
        const endpoint = (category) ? `http://localhost:5001/${category}/posts` : "http://localhost:5001/posts";


        return fetch(endpoint)
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


export function deleteComment(commentId, postId) {
    return dispatch => {
        return fetch(`http://localhost:5001/comments/${commentId}`, {
            method: "DELETE"
        })
            .then(response => {
                dispatch(loadPostComments(postId));
            })
            .catch(error => {
                throw(error)
            })
    }
}


export function updateCommentVoteScore(voteType, commentId, parentId) {
    return {type: types.UPDATE_COMMENT_SCORE, voteType, commentId, postId: parentId}
}


export function updateCommentVote(type, commentId, parentId) {
    return dispatch => {
        //updating the app
        dispatch(updateCommentVoteScore(type, commentId, parentId));

        //updating the server
        return fetch(`http://localhost:5001/comments/${commentId}`,
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

export function toggleCommentEdit(commentId, editState) {
    return {type: types.TOGGLE_COMMENT_EDIT, commentId, editState}
}


export function updateComment({comment, commentId}, postId) {
    return dispatch => {

        //updating the server
        return fetch(`http://localhost:5001/comments/${commentId}`,
            {
                method: "PUT",
                body: JSON.stringify({
                    body: comment,
                    timestamp: Date.now()
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => dispatch(loadPostComments(postId)))
            .catch(error => {
                throw(error)
            })
    }
}

export function postDeleteSuccess(postId) {
    return {type: types.POST_DELETE_SUCCESS, postId}
}


export function deletePost(postId) {
    return dispatch => {

        //updating the server
        return fetch(`http://localhost:5001/posts/${postId}`,
            {
                method: "DELETE"
            })
            .then(response => dispatch(postDeleteSuccess(postId)))
            .catch(error => {
                throw(error)
            })
    }
}

export function sortPosts(sortType) {
    return {type: types.POSTS_SORT_CHANGE, sortType}
}


export function addNewPost(postDetails) {
    return fetch(`http://localhost:5001/posts`, {
        method: "POST",
        body: JSON.stringify({
            id: uuid(),
            timestamp: Date.now(),
            ...postDetails
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .catch(error => {
            throw(error)
        });

}

export function toggleEdit(postId, state) {
    return {type: types.TOGGLE_POST_EDIT, state, postId}
}