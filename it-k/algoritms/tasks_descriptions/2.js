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
