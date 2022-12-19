/**
 * #Task 3: Запустите код и попробуйте объяснить разницу между результатами
 */

['1', '2', '3'].map(parseInt);
['1', '2', '3'].map((str) => parseInt(str));

console.log(
  [1, , 3].map((x, index) => {
    console.log(`Visit ${index}`);
    return x * 2;
  }),
);
// # На случаи затруднений: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map#using_parseint_with_map
