/*
Задача: проверить правильную расстановку скобок в тексте.

Примеры:

() - правильно
((())) - правильно
()()() - правильно


()( - неправильно
((()) - неправильно
)(())( - неправильно

Подсказка: используйте стэк как структуру данных (в javascript это array)
*/

import * as assert from "assert";

const isValidParentheses = (str) => {
  //TODO Write code here
}

assert.equal(isValidParentheses("()"), true);
assert.equal(isValidParentheses("((()))"), true)
assert.equal(isValidParentheses("()()()"), true)

assert.equal(isValidParentheses("()("), false)
assert.equal(isValidParentheses(")()"), false)
assert.equal(isValidParentheses("((())"), false)
assert.equal(isValidParentheses(")(())("), false)
