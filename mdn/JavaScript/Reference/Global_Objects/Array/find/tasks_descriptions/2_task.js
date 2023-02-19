import assert from "assert";
/**
 * #Task 2: Найдите объект где в свойстве "name" значение "cherries"
 */

const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];

const fruit; /** //TODO write code here */

assert.deepEqual(fruit, { name: 'cherries', quantity: 5 })
// # На случаи затруднений: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find#examples
