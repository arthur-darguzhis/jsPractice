//Перепишите этот код на цепочку промисов
const pr = fetch("https://google.com");

const pr2 = pr.then((data) => {
  console.log("pr then");
});

const pr3 = pr2.then((data2) => {
  console.log("pr2 then");
});

pr3.then((data3) => {
  console.log("pr3 then");
});

// В случае затруднений marginnote3app://note/D4A5F20A-FD38-4182-B132-2BC8A5C0B18B
