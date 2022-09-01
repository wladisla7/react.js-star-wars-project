import { HTTP, HTTPS } from '@constants/api'

/**
 * change url from http to https
 * @param {string} url - url for change
 * @returns {string} url with https
  */

export const changeHTTP = url => {
    return url ? url.replace(HTTP, HTTPS) : url
}

// export const getApiResource = (url) => {
//     fetch(url)
//         .then(res => res.json())
//         .then(body => console.log(body))
//         .catch(error => console.log(error.messege))

// }


/**
 * send fetch request 
 * @param {string} url - url for request
 * @returns {Promise} Promise with result of request
 */

export const getApiResource = async (url) => {
    try {
        const res = await fetch(url);

        if (!res.ok) {
            console.error('Could not fetch', res.status);
            return false
        }

        return await res.json();
    } catch (error) {
        console.error('Could not fetch', error.message);
        return false;
    }
}

export const makeCouncurrentRequest = async (url) => {
    const res = await Promise.all(url.map(res => {
        return fetch(res).then(res => res.json())
    }));

    return res
}
