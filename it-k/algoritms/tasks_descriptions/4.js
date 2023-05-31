import assert from "assert";
/*
* Алгоритм: "Сортировка подсчетом".
* Наша задача - отсортировать все числа в массиве.
* Каждое число в массиве между 0 и 100.
*/


const data = [1, 7, 90, 11, 22, 4, 1, 6, 7, 7, 7, 7, 4, 2, 5, 6, 6, 7, 44];

const countingSort = (numbers) => {
  //TODO write code here
}
countingSort(data);

assert.deepEqual(data, [
  1, 7, 90, 11, 22, 4, 1,
  6, 7,  7,  7,  7, 4, 2,
  5, 6,  6,  7, 44
])
