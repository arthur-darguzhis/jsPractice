/**
 * #Task 2: Проверьте утверждение:
 *
 * indexOf() специально сделан общим.
 * Он не требует, чтобы this являлся массивом,
 * так что он может быть применён к другим типам объектов
 * (например, к массивоподобным объектам).
 *
 * Напишите код использующий метода indexOf() на объекте arguments (объект содержащий все переданные значения в функцию).
 */

const fn = (...args) => {
  args.includes('a')
}

fn(1,2,3,4,5,6,7,'a')
//TODO write code here

// # На случаи затруднений: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

