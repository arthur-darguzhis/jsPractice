/*
Дан массив с набором уникальных эдементов.
Вывести все сочетания элементов массива, сумма которых равна 10
Подсказки:
  1) использовать hashTable
  2) отталкиваться надо от цифры 10
*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const numbersHashTable = numbers.reduce((acc, number) => {acc[number] = number
return acc}, {})

for (let numbersHashTableKey in numbersHashTable) {
  // console.log(numbersHashTableKey)
  const n = 10 - numbersHashTableKey;
  if(numbersHashTable[n]){
    console.log(`${n} + ${numbersHashTableKey}`)
  }
}

// numbersHashTable
