import {config} from '../config'

const originalFetch = window.fetch;


export async function fetch(url, options) {
    let response = await originalFetch(url, Object.assign({}, options, {
        headers: Object.assign({}, options && options.headers, config.AUTH_HEADERS)
    }));

    try {

        return await response.json();

    }
    catch (e) {

        //who cares dude;

    }

}
