/**
 * Не запуская кода, скажите какой результат выведет 8 строка?
 * Проверьте себя.
 */

const arr = ['a', , 'c'];
const denseKeys = [...arr.keys()];
console.log(denseKeys);

const sparseKeys = Object.keys(arr);
console.log(sparseKeys);

// # На случаи затруднений: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/keys#%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D1%80_%D0%B8%D1%82%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80_%D0%B2%D0%BE%D0%B7%D0%B2%D1%80%D0%B0%D1%89%D0%B0%D0%B5%D0%BC%D1%8B%D0%B9_%D0%BC%D0%B5%D1%82%D0%BE%D0%B4%D0%BE%D0%BC_keys_%D0%BD%D0%B5_%D0%BF%D1%80%D0%BE%D0%BF%D1%83%D1%81%D0%BA%D0%B0%D0%B5%D1%82_%D0%B4%D1%8B%D1%80%D0%BA%D0%B8_%D0%B2_%D0%BC%D0%B0%D1%81%D1%81%D0%B8%D0%B2%D0%B5
