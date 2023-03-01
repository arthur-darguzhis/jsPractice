//1. Постарайтесь подробно рассказать что происходит в коде строчка за строчкой.
//2. Верно ли утверждение что в переменной pr2 промисс будет fulfilled, как только callback внутри pr.then() будет выполнен?
// (а до этого там будет promise со статусом pending.)

//3. Измените код так что бы в режиме дебага. Можно было бы посмотреть результат fetch
const pr = fetch("https://google.com");

const pr2 = pr.then((data) => {
  console.log("pr then");
});

const pr3 = pr2.then((data2) => {
  console.log("pr2 then");
});

pr3.then((data3) => {
  console.log("pr3 then");
});

//В случаи затруднение marginnote3app://note/F13D95F0-B66A-4DFD-944E-53729B71BDA5
