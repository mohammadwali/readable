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

                    post.comments = post.comments || [];
                    post.comments = post.comments.filter(filterPostComments);

                    return post;

                }).filter(post => !post.deleted)
            ];


        case types.POST_DELETE_SUCCESS:
            return [
                ...state.filter(post => post.id !== action.postId)
            ];

        case types.POSTS_SORT_CHANGE:
            return [
                ...state.sort((a, b) => a[action.sortType] - b[action.sortType])
            ];

        case types.TOGGLE_POST_EDIT:

            return [
                ...state.map(post => {

                    //only updating the post which is changed!

                    if (post.id === action.postId) {
                        return Object.assign({}, post, {isEditing: action.state});
                    }

                    return post;
                })
            ];

        case types.UPDATE_POST:
            return [
                ...state.map(post => {

                    //only updating the post which is changed!

                    if (post.id === action.post.id) {
                        return Object.assign({}, post, {isEditing: false, ...action.post});
                    }

                    return post;
                })
            ];

        default:
            return state;
    }
}


export default postsReducer;