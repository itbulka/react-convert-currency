import {handlerError} from "./handlerErrors";

const config = {
    url: 'https://www.cbr-xml-daily.ru/',
}

function onResponse(res) {
    if (res.ok) {
        return res.json()
    } else {
        return Promise.reject(res)
    }
}

function request(endpoint = '', params) {
    return fetch(`${config.url}${endpoint}`)
                .then(onResponse)
                .catch(handlerError)

}

export async function getValutes() {
    const result = await request('daily_json.js ');
    return result.Valute;
}