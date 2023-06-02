/*
* Задача реализуйте свой set для хранения строк. (set это набор уникальных элементов)
* При попытке добавить элемент в set если он там уже есть, он не будет добавлен что бы не дублироваться.
*  */
import { createHash } from 'crypto';

class MySet {
  storage = {};

  add = (element) => {
    const hash = this._hashString(element);
    if(this.contains(element)){
      return false
    }

    this.storage[hash] = element
    return true
  }

  remove = (element) => {
    delete this.storage[element]
  }

  contains = (element) => {
    const hash = this._hashString(element);
    return !!this.storage[hash]
  }

  length = () =>{
    return this.storage.length
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

