import assert from "assert";
/**
 * #Task 2: "Ищите с конца массива индекс элемента" содержащего объект где в свойстве "quantity" значение меньше 1
 */

const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];

const result = inventory //TODO write code here

assert.deepEqual(result, 1)

// # На случаи затруднений: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLastIndex#try_it
