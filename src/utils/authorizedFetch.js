import {config} from '../config'

export function fetch(url, options) {
    return window.fetch(url, {
        headers: Object.assign({}, options && options.headers, config.AUTH_HEADERS)
    });
}