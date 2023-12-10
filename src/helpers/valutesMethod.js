export function createArrayOfValutes(valute) {
    return Object.keys(valute).map(key => valute[key]);
}