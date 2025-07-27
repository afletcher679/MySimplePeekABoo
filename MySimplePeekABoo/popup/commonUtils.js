
export function getRandomInt(number) {
    return Math.floor(Math.random() * number);
}

export function tryFilterOutArrayItem(array, item) {
    return item ? array.filter(arrayItem => arrayItem !== item) : array;
}