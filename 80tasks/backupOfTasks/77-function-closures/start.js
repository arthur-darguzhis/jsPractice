import assert from "assert";
/** ЗАДАЧА 77 - Замыкания
 *
 * 1. Создайте функцию "createGreeting", внутри которой создайте:
 *  - переменную "greetingString" с значением "Hey, this is"
 *    (объявите ее используя "let")
 *  - функцию "greet" с одним параметром, которая должна возвращать
 *    строку-приветствие на основании "greetingString" и параметра,
 *    например, "Hey, this is Bob"
 *  - функцию "changeGreeting" с одним параметром, которая должна
 *    изменять значение переменной "greetingString"
 *
 * 2. Функция "createGreeting" должа вернуть объект с двумя методами:
 *  - greet
 *  - changeGreeting
 */

//TODO write code here

const greeting1 = createGreeting();
assert.equal(greeting1.greet("Bob") ,'Hey, this is Bob')
greeting1.changeGreeting("Good Morning from");
assert.equal(greeting1.greet("Emily"), "Good Morning from Emily")
const greeting2 = createGreeting();
assert.equal(greeting2.greet("Emily"),"Hey, this is Emily")
