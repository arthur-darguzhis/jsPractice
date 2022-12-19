/**
 * #Task 5: Супер сложное и важное задание
 *
 * Проверим следующие утверждения из документации
 *
 * Элементы массива, обрабатываемые методом filter(),
 * устанавливается до первого вызова функции callback.
 * Элементы, добавленные в массив после начала выполнения метода filter(),
 * либо изменённые в процессе выполнения, не будут обработаны функцией callback.
 *
 * Соответствующим образом, если существующие элементы удаляются из массива,
 * они также не будут обработаны
 *
 * Предупреждение: одновременное изменение элементов, описанное в предыдущем параграфе,
 * часто приводит к труднопонимаемому коду, поэтому не рекомендуется делать это
 * (за исключением особых случаев).
 */


// ========>>>>>>>>
// Изменение всех элементов
let words = ['spray', 'limit', 'exuberant', 'destruction','elite', 'present']

const modifiedWords = words.filter( (word, index, arr) => {
  arr[index+1] +=' extra'
  return word.length < 6
})

console.log(modifiedWords)
//TODO что будет содержаться в этой переменной? и почему?
//# На случаи затруднений: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/filter#%D0%BC%D0%BE%D0%B4%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%86%D0%B8%D1%8F_%D0%B8%D0%B7%D0%BD%D0%B0%D1%87%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%B3%D0%BE_%D0%BC%D0%B0%D1%81%D1%81%D0%B8%D0%B2%D0%B0_%D0%B8%D0%B7%D0%BC%D0%B5%D0%BD%D0%B5%D0%BD%D0%B8%D0%B5_%D0%B4%D0%BE%D0%B1%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5_%D0%B8_%D1%83%D0%B4%D0%B0%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5


// ========>>>>>>>>
// Добавление новых элементов
words = ['spray', 'limit', 'exuberant', 'destruction','elite', 'present']
const appendedWords = words.filter( (word, index, arr) => {
  arr.push('new')
  return word.length < 6
})

console.log(appendedWords)
//TODO что будет содержаться в этой переменной? и почему?
//# На случаи затруднений: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/filter#%D0%BC%D0%BE%D0%B4%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%86%D0%B8%D1%8F_%D0%B8%D0%B7%D0%BD%D0%B0%D1%87%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%B3%D0%BE_%D0%BC%D0%B0%D1%81%D1%81%D0%B8%D0%B2%D0%B0_%D0%B8%D0%B7%D0%BC%D0%B5%D0%BD%D0%B5%D0%BD%D0%B8%D0%B5_%D0%B4%D0%BE%D0%B1%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5_%D0%B8_%D1%83%D0%B4%D0%B0%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5



// ========>>>>>>>>
// Удаление элементов
words = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present']
const deleteWords = words.filter( (word, index, arr) => {
  arr.pop()
  return word.length < 6
})

console.log(deleteWords)

//TODO что будет содержаться в этой переменной? и почему?
//# На случаи затруднений: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/filter#%D0%BC%D0%BE%D0%B4%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%86%D0%B8%D1%8F_%D0%B8%D0%B7%D0%BD%D0%B0%D1%87%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%B3%D0%BE_%D0%BC%D0%B0%D1%81%D1%81%D0%B8%D0%B2%D0%B0_%D0%B8%D0%B7%D0%BC%D0%B5%D0%BD%D0%B5%D0%BD%D0%B8%D0%B5_%D0%B4%D0%BE%D0%B1%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5_%D0%B8_%D1%83%D0%B4%D0%B0%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5
