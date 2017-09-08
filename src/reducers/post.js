import * as types from '../actions/actionTypes';


function postReducer(state = [], action) {
    switch (action.type) {

        case types.LOAD_POSTS_SUCCESS:
            return action.posts;

        case types.UPDATE_POSTS_SCORE:
            return [
                ...state.map((post) => {

                    //only updating the post which is changed!
                    if (post.id === action.postId) {
                        const newPost = Object.assign({}, post);

                        newPost.voteScore += (action.voteType === "upVote") ? 1 : -1;

                        return newPost;
                    }

                    return post;
                })
            ];

        case types.UPDATE_POST_COMMENTS:
            return [
                ...state.map((post) => {

                    //only updating the post which is changed!
                    if (post.id === action.postId) {
                        const newPost = Object.assign({}, post);

                        newPost.comments = [...action.comments];

                        return newPost;
                    }

                    return post;
                })
            ];

        default:
            return state;
    }
}


export default postReducer;