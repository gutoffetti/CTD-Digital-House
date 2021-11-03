// Exercício 1:
console.log("--------------- Ex. 1 ---------------")
console.log(!true);
console.log("--------------- Ex. 2 ---------------")
console.log(!false);
console.log("--------------- Ex. 3 ---------------")
console.log(!!false);
console.log("--------------- Ex. 4 ---------------")
console.log(!!true);
console.log("--------------- Ex. 5 ---------------")
console.log(!1);
console.log("--------------- Ex. 6 ---------------")
console.log(!!1);
console.log("--------------- Ex. 7 ---------------")
console.log(!0);
console.log("--------------- Ex. 8 ---------------")
console.log(!!0);
console.log("--------------- Ex. 9 ---------------")
console.log(!!"");
console.log("--------------- Ex. 10 ---------------")
let x = 5;
let y = 9;
console.log(x < 10 && x!==5);
console.log(x>9 || x===5);
console.log(!(x===y));

// Exercício 2:

console.log("--------------- Ex. 1 ---------------")
let a = 10;
let b = "a";
console.log(b==="b" || a >= 10);

console.log("--------------- Ex. 2 ---------------")
let c = 3;
let d = 8;
console.log(!(c == "3" || c === d) && !(d !== 8 && c <= d));

console.log("--------------- Ex. 3 ---------------")
let str = "";
let msg = "haha!";
let eBonito = "false";
console.log(!((str || msg) && eBonito));