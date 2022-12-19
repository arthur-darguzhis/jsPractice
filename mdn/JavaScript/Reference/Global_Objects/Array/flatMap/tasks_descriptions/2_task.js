/**
 * #Task 1: Не запуская кода, скажите что выдаст 10 строка?
 */

let arr1 = ["it's Sunny in", "", "California"];

arr1.map(x => x.split(" "));
// [["it's","Sunny","in"],[""],["California"]]

arr1.flatMap(x => x.split(" "));

// # На случаи затруднений: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap#%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D1%80%D1%8B
