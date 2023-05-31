/*
Перед вами алгоритм проверяющий правильную расстановку скобок в тексте.
Задача: избавьтесь от стэека (18 строка), а вместо него используйте счетчик count = 0

Примеры:
() - правильно
((())) - правильно
()()() - правильно

()( - неправильно
((()) - неправильно
)(())( - неправильно
*/

import * as assert from "assert";

const isValidParentheses = (str) => {
  let count = 0;
  for (let i = 0; str.length > i; i++) {
    const symb = str[i];

    if (symb == "(") {
      count++;
    } else {
      if(count == 0){
        return false
      }
      count--;
    }
  }
  return count === 0
}

assert.equal(isValidParentheses("()"), true);
assert.equal(isValidParentheses("((()))"), true)
assert.equal(isValidParentheses("()()()"), true)

assert.equal(isValidParentheses("()("), false)
assert.equal(isValidParentheses(")()"), false)
assert.equal(isValidParentheses("((())"), false)
assert.equal(isValidParentheses(")(())("), false)
