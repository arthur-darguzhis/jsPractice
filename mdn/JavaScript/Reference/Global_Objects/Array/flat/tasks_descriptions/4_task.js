/**
 * #Task 4: рекурсивно поднимает вложенность массивов,
 * что бы получить следующий результат [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 */
const depth = ; /** TODO write code here */
if (typeof depth === "number") {
  throw new Error("value for \"deep\" variable must not be number");
}

const arr1 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
console.log(arr1.flat(depth));
// expected output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// # На случаи затруднений: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/flat#%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D1%80%D1%8B
