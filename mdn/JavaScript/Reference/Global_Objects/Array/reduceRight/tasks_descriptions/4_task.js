/**
 * #Task 4: Напишите метод groupBy который принимает 2 параметра
 * objectArray - массив с объектами
 * property - свойство на основании которого перегруппировать.
 *
 * используя не reduce() а reduceRight()
 */

const people = [
  { name: "Alice", age: 21 },
  { name: "Max", age: 20 },
  { name: "Jane", age: 20 },
];

const groupBy = (objectArray, property) => {

}
//TODO write code here

const groupedPeople = groupBy(people, "age");
console.log(groupedPeople);
// {
//   20: [
//     { name: 'Max', age: 20 },
//     { name: 'Jane', age: 20 }
//   ],
//   21: [{ name: 'Alice', age: 21 }]
// }

// # На случаи затруднений: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#grouping_objects_by_a_property
