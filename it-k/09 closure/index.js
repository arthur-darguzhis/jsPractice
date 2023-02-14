const print = (name) => {
  console.log(`hello, ${name}`);
};

const createPrint = (name) => {
  return () => print(name);
};

setTimeout(createPrint("Max"), 1000);
setTimeout(createPrint("Bogdan"), 1000);

setTimeout((name) => {
  print(name)
}, 1000);

const myFn = (name) => {
  return () => print(name)
}

setTimeout(print('art'), 1000)


//Класс задание про замыкание запустить этот код посмотреть на ошибку и сделать код рабочим, после чего объясить его
const print = (name) => {
  console.log(`hello, ${name}`);
};
setTimeout(print('art'), 1000)
