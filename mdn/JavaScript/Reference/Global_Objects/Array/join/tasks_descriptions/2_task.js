/**
 * Не запуская кода, скажите что выведет 8 строка?
 * Проверьте себя
 */

function f(a, b, c) {
  const s = Array.prototype.join.call(arguments);
  console.log(s);
}
f(1, 'a', true);

// # На случаи затруднений: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/join#%D1%81%D0%BE%D0%B5%D0%B4%D0%B8%D0%BD%D0%B5%D0%BD%D0%B8%D0%B5_%D1%8D%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82%D0%BE%D0%B2_%D0%BC%D0%B0%D1%81%D1%81%D0%B8%D0%B2%D0%BE%D0%BF%D0%BE%D0%B4%D0%BE%D0%B1%D0%BD%D0%BE%D0%B3%D0%BE_%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D0%B0
