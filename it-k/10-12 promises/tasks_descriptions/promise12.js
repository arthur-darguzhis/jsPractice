//Это сложное и важное упражнение
//Запустите код, и объясните как он пошагово выполнялся
//Для самопроверки marginnote3app://note/75F3090A-06BC-49B5-A767-495F105FC76B

const prom = new Promise((resolve, reject) => {
  resolve(1);
});

prom
  .then(() => {
    console.log("1");
  })
  .then(() => {
    console.log("2");
  })
  .then(() => {
    console.log("3");
  });


const prom2 = new Promise((resolve, reject) => {
  resolve(1);
});

prom2
  .then(() => {
    console.log("4");
  })
  .then(() => {
    console.log("5");
  })
  .then(() => {
    console.log("6");
  });
