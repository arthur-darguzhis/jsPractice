//1) Почему в 11 строке константа data имеет неправильное имя? что на самом деле будет храниться в этой константе?
//   Исправьте имя константы data на правильное
//2) Напишите который выводит в консоль значение 5 из 7 строки

const promise = fetch("https://google.com");
const promise2 = promise.then((data) => {
  return 5;
});

promise2.then((data) => {
  console.log(data);
});
