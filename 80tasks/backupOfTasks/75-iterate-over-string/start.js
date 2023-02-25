import assert from "assert";

/** ЗАДАЧА 75 - Перебор символов строки
 *
 * Подсчитайте количество строчных гласных букв в строке.
 * Гласные буквы - a, e, i, o, u
 */

let vowelsCount = 0;
const vowels = ["a", "e", "i", "o", "u"];

const str = "Today is the best day of my life";

//TODO write code here
for (const letter of str) {
  if (vowels.includes(letter)) {
    vowelsCount += 1;
  }
}

assert.equal(vowelsCount, 9);
