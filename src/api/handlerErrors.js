export function handlerError(res) {

    if(!res.status) {
        return Promise.reject('Произошла неизвестная ошибка. Попробуйте позже');
    } else {
        return Promise.reject(`Произошла неизвестная ошибка. ${res.status}`);
    }

}