import * as types from '../actions/actionTypes';


function postsReducer(state = [], action) {
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
                ...state.map(post => {

                    const filterPostComments = comment => !comment.deleted;

                    //only updating the post which is changed!
                    if (post.id === action.postId) {
                        const newPost = Object.assign({}, post);

                        newPost.comments = [...action.comments].filter(filterPostComments);

                        return newPost;
                    }

                    post.comments = post.comments.filter(filterPostComments);

                    return post;

                }).filter(post => !post.deleted)
            ];

        default:
            return state;
    }
}


export default postsReducer;