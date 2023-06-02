/*
* Найти какие элементы присутствуют в обоих списках
* Подсказка:
  1) используйте hashTable
* */

const fields1 = [
  {
    id: 1,
    data: "datal"
  },
  {
    id: 2,
    data: "data2"
  }
];
const fields1Map = fields1.reduce((acc, field) =>
{
  acc[field.id] = field
  return acc;
}, {})

const fields2 = [
  {
    id: 1,
    data: "datal"
  },
  {
    id: 3,
    data: "data3"
  }
];
const fields2Map = fields2.reduce((acc, field) =>{
  acc[field.id] = field
  return acc;
}, {})

const myField = []

for(let field in fields1Map){
  if(fields2Map[field] !== undefined){
    myField.push(fields2Map[field]);
  }
}

console.log(myField)
