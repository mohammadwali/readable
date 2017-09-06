import * as types from '../actions/actionTypes';


function postReducer(state = [], action) {
    switch (action.type) {
        case types.LOAD_POSTS_SUCCESS:
            return action.posts;
        default:
            return state;
    }
}


export default postReducer;