import {config} from '../config'

export function fetch(url, options) {
    return window
        .fetch(url, Object.assign({}, options, {
            headers: Object.assign({}, options && options.headers, config.AUTH_HEADERS)
        }))
        .then(response => response.json());
}