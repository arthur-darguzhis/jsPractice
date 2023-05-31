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
  const stack = [];
  for (let i = 0; str.length > i; i++) {
    const symb = str[i];

    if (symb == "(") {
      stack.push(symb);
    } else {
      if(stack.length == 0){
        return false
      }
      stack.pop()
    }
  }
  return stack.length === 0
}

assert.equal(isValidParentheses("()"), true);
assert.equal(isValidParentheses("((()))"), true)
assert.equal(isValidParentheses("()()()"), true)

assert.equal(isValidParentheses("()("), false)
assert.equal(isValidParentheses(")()"), false)
assert.equal(isValidParentheses("((())"), false)
assert.equal(isValidParentheses(")(())("), false)
