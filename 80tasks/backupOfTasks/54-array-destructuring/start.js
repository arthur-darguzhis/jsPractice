import assert from "assert";
/** ЗАДАЧА 54 - Деструктуризация массива
 *
 * Измените раздел параметров в функции "processQuantities" так,
 * чтобы совпали выводы в консоли
 *
 * Используйте деструктуризацию массива
 */

const processQuantities = (arr) => {
  //TODO write code here
  console.log(minQty) // 8
  console.log(maxQty) // 29
  console.log(defaultQty) // 10 в первом вызове, 0 во втором вызове
  return defaultQty + maxQty - minQty
}

const inputQuantities1 = [8, 29, 10]
assert.equal(processQuantities(inputQuantities1), 31)

const inputQuantities2 = [8, 29]
assert.equal(processQuantities(inputQuantities2), 21)
