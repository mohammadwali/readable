import * as types from './actionTypes';
import {fetch} from '../utils/authorizedFetch';


export function loadCategoriesSuccess({categories}) {
    return {type: types.LOAD_CATEGORIES_SUCCESS, categories};
}


export function loadCategories() {

    return dispatch => {

        return fetch("http://localhost:5001/categories")
            .then(response => dispatch(loadCategoriesSuccess(response)))
            .catch(error => {
                throw(error)
            })
    }
}
