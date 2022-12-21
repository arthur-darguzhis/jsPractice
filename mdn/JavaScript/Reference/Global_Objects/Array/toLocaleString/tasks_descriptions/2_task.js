/**
 * #Task 2: Запустите код и попробуйте выяснить почему он работает так и как он еще может работать?
 * [ ] - попробуйте заменить валюту.
 * [ ] - попробуйте выяснить какие еще стили могут быть кроме currency.
 *        Object: Object.prototype.toLocaleString()
 *        Number: Number.prototype.toLocaleString()
 *        Date: Date.prototype.toLocaleString()
 *
 * [ ] - Почитайте еще раз об этом методе https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toLocaleString
 */

const prices = ["￥7", 500, 8123, 12];
prices.toLocaleString("ja-JP", { style: "currency", currency: "JPY" });

// "￥7,￥500,￥8,123,￥12"
