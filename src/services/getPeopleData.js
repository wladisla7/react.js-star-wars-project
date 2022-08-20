import {
    HTTP, HTTPS, SWAPI_ROOT, SWAPI_PEOPLE,
    GUIDE_IMG_EXTENTION, URL_IMG_PERSONE
} from '../constatns/api';

const checkProtocol = url => {
    if (url.indexOf(HTTPS) !== -1) {
        return HTTPS;
    }

    return HTTP;
}


const getId = (url, category) => {
    const protocol = checkProtocol(url);

    const id = url
        .replace(protocol + SWAPI_ROOT + category, '')
        .replace(/\//g, '')

    return id;

}

export const getPeopleId = url => getId(url, SWAPI_PEOPLE);

export const getPeopleImage = id => `${URL_IMG_PERSONE}/${id + GUIDE_IMG_EXTENTION}`;
