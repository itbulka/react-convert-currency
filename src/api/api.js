const config = {
    url: 'https://www.cbr-xml-daily.ru/daily_json.js',
    headers: {
        "Content-type": "application/json",
    }
}

function onResponse(res) {
    return res.ok ? res.json() : res.json().then(err => Promise.reject(err));
}

async function request(endpoint = '', params) {
    const data = await fetch(`${config.url}`);

    return onResponse(data);
}

export async function getValutes() {
    const result = await request();
    return result.Valute;
}