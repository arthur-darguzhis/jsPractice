import assert from "assert";
/**
 * #Task 2: Ищите с конца массива объект в котором значение в поле quantity меньше 2
 */

const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "fish", quantity: 1 },
  { name: "cherries", quantity: 5 },
];

const fruit = inventory//TODO write code here;
assert.deepEqual(fruit, { name: "fish", quantity: 1 })

// # На случаи затруднений: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLast#examples
