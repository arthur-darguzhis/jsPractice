/**
 * #Task 2: Не запуская код какие значения будут выведены 7 строкой? и  почему?
 */

let words = ['one', 'two', 'three', 'four']
words.forEach((word) => {
  console.log(word)
  if (word === 'two') {
    words.shift()
  }
})

// # На случаи затруднений: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#%D0%BC%D0%BE%D0%B4%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%86%D0%B8%D1%8F_%D0%BC%D0%B0%D1%81%D1%81%D0%B8%D0%B2%D0%B0_%D0%B2%D0%BE_%D0%B2%D1%80%D0%B5%D0%BC%D1%8F_%D0%B8%D1%82%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D0%B8
