import * as types from '../actions/actionTypes';
import generateScore from '../utils/generateScore';

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
            state.comments = state.comments || [];
            state.comments = state.comments.filter(filterPostComments);

            return state;

        case types.UPDATE_POSTS_SCORE:

            //only updating the post which is changed!
            if (state.id === action.postId) {
                return Object.assign({}, state, {
                    voteScore: generateScore(state.voteScore, action.voteType)
                });
            }

            return state;

        case types.UPDATE_COMMENT_SCORE:


            //only updating the post which is changed!
            if (state.id === action.postId) {
                const newPost = Object.assign({}, state);

                newPost.comments = [
                    ...newPost.comments.map(comment => {

                        if (comment.id === action.commentId) {

                            return Object.assign({}, comment, {
                                voteScore: generateScore(comment.voteScore, action.voteType)
                            });

                        }

                        return comment;
                    })
                ];

                return newPost;
            }


            return state;

        case types.TOGGLE_COMMENT_EDIT:


            //only updating the post which is changed!

            return Object.assign({}, state, {
                comments: [
                    ...state.comments.map(comment => {

                        if (comment.id === action.commentId) {

                            return Object.assign({}, comment, {
                                isEditing: action.editState
                            });

                        }

                        return comment;
                    })
                ]
            });

        case types.TOGGLE_POST_EDIT:


            //only updating the post which is changed!

            return Object.assign({}, state, {isEditing: action.state});


        case types.UPDATE_POST:

            if (state.id === action.post.id) {
                return Object.assign({}, state, {isEditing: false, ...action.post});
            }

            return state;

        default:
            return state;
    }
}


export default postDetailsReducer;