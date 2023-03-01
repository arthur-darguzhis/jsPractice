import assert from "assert";
/* Реализуйте промисификацию функции delay, что бы задавать таймер
* При этом обязательно что бы промис, возвращал количество ms. */

setTimeout(() => {
  console.log(1);
  setTimeout(() => {
    console.log(2);
    setTimeout(() => {
      console.log(3);
    }, 3000);
  }, 2000);
}, 1000);

const delay = (ms) => {
  //TODO write code here
};

delay(1000)
  .then((delayTime1) => console.log(delayTime1))
  .then(() => delay(2000))
  .then((delayTime2) => console.log(delayTime2))
  .then(() => delay(3000))
  .then((delayTime3) => console.log(delayTime3));

const delayTime1 = await delay(1000);
console.log(delayTime1);
const delayTime2 = await delay(2000);
console.log(delayTime2);
const delayTime3 = await delay(3000);
console.log(delayTime3);


assert.equal(delayTime1, 1000);
assert.equal(delayTime2, 2000);
assert.equal(delayTime3, 3000);
