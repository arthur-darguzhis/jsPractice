//1) Напишите код, который дождется выполнения всех трех промисов "по принципу транзакции"
//2) И достаньте их результаты.
//3) Вопрос: Что будет если один из промисов упадет? В таком случаи упадет супет superPromise

const superPromise = Promise.all([
    fetch("https://google.com/?query=js"),
    fetch("https://yandex.com/?query=js"),
    fetch("https://bing.com/?query=js")
  ]
);

superPromise.then((arrayWithDataFromAllPromises) => {
  arrayWithDataFromAllPromises[0];
  arrayWithDataFromAllPromises[1];
  arrayWithDataFromAllPromises[2];
});
