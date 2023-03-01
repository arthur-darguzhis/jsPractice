//1) Обработайте все три промиса одновременно, и верните общий результат когда неважно все они зарезолвились или некоторые отпали
//2) И достаньте для всех решенных промисов значения, а дря промиса который был rejected причину

const superPromise = Promise.allSettled([
    fetch("https://google.com/?query=js"),
    fetch("htps://yandex.com/?query=js"), //error
    fetch("https://bing.com/?query=js")
  ]
);

superPromise.then((result) => result.forEach((promiseResult) => {
  if (promiseResult.status === "fulfilled") {
    promiseResult.value;
  }

  if (promiseResult.status === "rejected") {
    promiseResult.reason;
  }
}));

// На случай трудностей marginnote3app://note/92497905-3439-4D6E-97C1-6A11934EBE61
