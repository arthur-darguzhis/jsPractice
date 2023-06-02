/*
* Задача реализуйте свой set для хранения строк. (set это набор уникальных элементов)
* При попытке добавить элемент в set если он там уже есть, он не будет добавлен что бы не дублироваться.
* */
import { createHash } from 'crypto';

class MySet {
  storage = {};

  add = (element) => {
    //TODO write code here
  }

  remove = (element) => {
    //TODO write code here
  }

  contains = (element) => {
    //TODO write code here
  }

  _hashString = (input) => {
    const hash = createHash('sha256');
    hash.update(input);
    return hash.digest('hex');
  }
}

const max = 1000
const s = new MySet()
for(let i = 0; i < max; i++){
  s.add('Arthur'+i);
}

