import * as types from '../actions/actionTypes';


function postReducer(state = [], action) {
    switch (action.type) {
        case types.LOAD_POSTS_SUCCESS:
            return action.posts;

        case types.UPDATE_POSTS_SCORE:
            return [
                ...state.map((post) => {
                    if (post.id === action.postId) {
                        post.voteScore += (action.voteType === "upVote") ? 1 : -1;
                    }

                    return post;
                })
            ];


        default:
            return state;
    }
}


export default postReducer;