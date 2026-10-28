import * as xxx from "./toto.js";
console.log("xxx: ", xxx);

const { a, b, default: truc } = xxx;

console.log("b: ", b);
console.log("a: ", a);

console.log("truc: ", truc);

var result = truc.add(1, 2);
console.log("result: ", result);
