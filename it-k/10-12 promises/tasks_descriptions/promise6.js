//Что будет храниться в xxx в 13 строке?

const promise = fetch("https://google.com");
const promise2 = promise.then((data) => {
  return 5;
});

promise2.then((five) => console.log(five))
  .then(() => {
    const promise = fetch("https://google.com");
    return promise;
  })
  .then((xxx) => {
    console.log(xxx);
  });

//На случай затрудненият marginnote3app://note/2722BB4D-91E7-4A16-9F4A-3BABF38C271A
