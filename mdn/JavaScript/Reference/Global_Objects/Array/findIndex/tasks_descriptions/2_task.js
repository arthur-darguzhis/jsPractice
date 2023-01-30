import assert from "assert";
/**
 * #Task 2: Найдите индекс элемента содержащего объект где в свойстве "name" значение "cherries"
 */

const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];

const cherriesIndex = inventory //TODO write code here

assert.equal(cherriesIndex, 2);
// # На случаи затруднений: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find#try_it
