/**
 * #Task 3: Не запуская код, скажите, повлияет ли изменения свойства name объекта из массива people (15 строка)
 * на вывод содержимого массива result (16 строка)?
 */

const alpha = ["a", "b", "c"];
const people = [
  { name: "Arthur", age: 30 },
  { name: "Olga", age: 28 }
];

const result = alpha.concat(people);
console.log(result);

people.at(0).name = 'changedName'
console.log(result)

// # На случаи затруднений: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/concat#%D0%BE%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5

