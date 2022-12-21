/**
 * #Task 5: Check that arr.flat() method removes empty slots in arrays:
 */

const arr1 = [1, 2, , 4, 5];
console.log(arr1 /** TODO write code here */);
// expected output: [1, 2, 3, 4]

const arr2 = [1, , 3, ["a", , "c"]];
console.log(arr2 /** TODO write code here */);
// expected output: [ 1, 3, "a", "c" ]

const arr3 = [1, , 3, ["a", , ["d", , "e"]]];
console.log(arr3 /** TODO write code here */);
// expected output: [ 1, 3, "a", ["d", empty, "e"] ]

console.log(arr3 /** TODO write code here */);
// expected output: [ 1, 3, "a", "d", "e"]

// # На случаи затруднений: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/flat#%D1%83%D0%BF%D1%80%D0%BE%D1%89%D0%B5%D0%BD%D0%B8%D0%B5_%D0%B8_%D0%B4%D1%8B%D1%80%D0%BA%D0%B8_%D0%B2_%D0%BC%D0%B0%D1%81%D1%81%D0%B8%D0%B2%D0%B0%D1%85



