//Что будет в переменной data3 в 11 строке, promise или результат этого промиса.
//Запустите код с точкой останова в 12 строке, что бы проверить себя

fetch("https://google.com")
  .then((data) => {
    console.log("pr then");
  })
  .then((data2) => {
    return fetch("https://yandex.ru");
  })
  .then((data3) => {
    console.log(data3)
    console.log("pr3 then");
  });

//На случай затруднений. Про суперспособность промисов как они помогают избавиться от ада из callback
//marginnote3app://note/D91E361E-2379-4770-BF49-35F766B1D284
