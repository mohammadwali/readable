import {LOAD_CATEGORIES_SUCCESS} from '../actions/actionTypes';


export default function postsReducer(state = [], action) {
    switch (action.type) {
        case LOAD_CATEGORIES_SUCCESS:
            return action.categories;

        default:
            return state;
    }
}
