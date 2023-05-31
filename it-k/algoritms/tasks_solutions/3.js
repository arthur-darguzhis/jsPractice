import assert from "assert";
/*
* На входе алгоритма массив из чисел.
* Необходимо вычислить ТОП к самых больших чисел.
*/

const getTopKItems = (arr, k) => {
  //TODO write code here
  const sortedNumbers = arr.sort((a,b) => a - b)
  return sortedNumbers.splice(sortedNumbers.length - k)
}


assert.deepEqual(getTopKItems([1, 2, 3, 4, 5, 6, 7, 8, 9], 3), [7,8,9])
assert.deepEqual(getTopKItems([9, 8, 7, 6, 5, 4, 3, 2, 1], 4), [6,7,8,9])
