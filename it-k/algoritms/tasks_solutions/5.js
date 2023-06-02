/*
* Задача - отсортировать строки так,
* чтобы строки, которые отличаются на 1 символ
* оказались рядом.
*
* ARTEM
* ARTUM
*
* E+U=A
*
* ARTAM
*/

//TODO посмотреть еще раз видео в папочке 2.1 и дооформить задачу не очень вначале понял что зачем и почему.

import assert from "assert";

const data = [
  "ABCD",
  "ABCA",
  "BBCD",
  "ACCD",
  "ABBD"
]


/** position = это номер позиции если 0 то надо сортировать data по значениям нулевой позиции каждой строки. */
const radixSort = (data, position) => {
  const size = 4;
  const result = [];

  for(let i = 0; i< data.length; i++){

  }
}

assert.deepEqual(radixSort(data, 3), [])
assert.deepEqual(radixSort(data, 2), [])
assert.deepEqual(radixSort(data, 1), [])
assert.deepEqual(radixSort(data, 0), [])
