//Запустите этот код, и объясните почему в консоль дважды вывелось "then" на 5 и 6 строках,
// так же расскжите про вывод на 8 строке
const pr = fetch('https://google.com')

pr.then(() => console.log("then"));
pr.then(() => console.log("then"));
pr.catch(() => console.log("catch"));
pr.finally(() => console.log("finally"));

//В случаи затруднение marginnote3app://note/120E2401-50C5-41B1-B54B-E084207D83DF
