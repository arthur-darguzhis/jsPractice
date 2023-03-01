//В коде ошибка, мы хотим что бы запрос на bing.com шел после того как мы получим ответ от yandex.com.
//Почему сейчас запрос на bing.com не дожидается ответа от yandex.com и как это исправить?

fetch('https://google.com/?query=js').then(() => {
  fetch('https://yandex.com/?query=js')
}).then(() => {
  fetch('https://bing.com/?query=js')
})

//На случай если возникнут трудности marginnote3app://note/7A8030AE-A0C4-4DBC-ABA5-FCC8DE18D1CB
