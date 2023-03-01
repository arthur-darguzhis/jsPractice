//Часто бывают ситуации когда нам нужно сделать несколько запросов.
//Сделайте запросы к страницам последовательными что бы следующая дожидалась ответа от предыдущей

fetch('https://google.com/?query=js').then(() => {
  return fetch('https://yandex.com/?query=js')
}).then(() => {
  return fetch('https://bing.com/?query=js')
}).then(() => {

})

// marginnote3app://note/7A8030AE-A0C4-4DBC-ABA5-FCC8DE18D1CB
