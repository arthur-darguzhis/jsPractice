import assert from "assert";
/*
* Алгоритм: "Сортировка подсчетом".
* Наша задача - отсортировать все числа в массиве.
* Каждое число в массиве между 0 и 100.
*/

const data = [1, 7, 90, 11, 22, 4, 1, 6, 7, 7, 7, 7, 4, 2, 5, 6, 6, 7, 44];

const countingSort = (numbers) => {
  const numbersCount = []
  const result = []
  numbers.forEach((el) => {
    numbersCount[el] === undefined
      ? numbersCount[el] = 1
      : numbersCount[el] +=1
  })

  numbersCount.forEach((count, number) => {
      for(let i = 0; i < count; i++ ){
        result[result.length] = number
      }
    }
  )
  return result
}
countingSort(data);

assert.deepEqual(data, [
  1, 7, 90, 11, 22, 4, 1,
  6, 7,  7,  7,  7, 4, 2,
  5, 6,  6,  7, 44
])
