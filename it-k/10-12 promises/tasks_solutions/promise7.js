//1. Какое значение будет в xxx (15 строка)?
//2. Обработайте промис из 11 строки избегая вложенности.
const promise = fetch("https://google.com");
const promise2 = promise.then((data) => {
  return 5;
});

promise2.then((five) => console.log(five))
  .then(() => {
    return {
      promise: fetch("https://google.com"),
      value: 5
    };
  })
  .then((xxx) => {
    console.log(xxx.value);
    return xxx.promise;
  })
  .then((googleData) => {

  });
