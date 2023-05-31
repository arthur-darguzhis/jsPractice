import assert from "assert";
/*
* На входе алгоритма массив из чисел.
* Необходимо вычислить ТОП к самых больших чисел.
* Обязательно: Используя "очередь с приоритетом" (аналогия из жизни очередь по талончику а не по живому порядку)
*/

const getTopKItems = (arr, k) => {
  //TODO write code here
}


assert.deepEqual(getTopKItems([1, 2, 3, 4, 5, 6, 7, 8, 9], 3), [7,8,9])
assert.deepEqual(getTopKItems([9, 8, 7, 6, 5, 4, 3, 2, 1], 4), [6,7,8,9])
