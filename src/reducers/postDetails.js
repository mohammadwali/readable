import * as types from '../actions/actionTypes';


function postDetailsReducer(state = {}, action) {
    switch (action.type) {

        case types.POST_DETAILS_LOADED:
            return Object.assign({}, state, action.post);

        case types.UPDATE_POST_COMMENTS:
            const filterPostComments = comment => !comment.deleted;

            //only updating the post which is changed!
            if (state.id === action.postId) {

                const newPost = Object.assign({}, state);

                newPost.comments = [...action.comments].filter(filterPostComments);

                return newPost;
            }

            state.comments = state.comments.filter(filterPostComments);

            return state;

        case types.UPDATE_POSTS_SCORE:

            //only updating the post which is changed!
            if (state.id === action.postId) {
                const newPost = Object.assign({}, state);

                newPost.voteScore += (action.voteType === "upVote") ? 1 : -1;

                return newPost;
            }

            return state;

        default:
            return state;
    }
}


export default postDetailsReducer;