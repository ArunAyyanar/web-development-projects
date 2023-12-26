console.log("js concepts");
console.log("### destructuring");
// Destructing
// Array
const scores = [99, 98, 100];
const [tamil, science, maths] = scores;
console.log(tamil, science, maths);
// object
const arunObj = { name: "arun", age: 34, location: "chennai" };
const { name, age, location } = arunObj;
console.log("Arun details");
console.log(name, age, location);
//Arrow function
console.log("### Arrow funtion");
const sum = (n1, n2) => n1 + n2;
console.log(sum(12, 23));

console.log("sum of 'n' numbers");
const sumNew = (...n) => {
  return n.reduce((n1, n2) => n1 + n2);
};
console.log(sumNew(1, 2));
console.log(sumNew(1, 42, 6));
console.log(sumNew(1, 2.34, 34.45));
console.log(sumNew(1, 0.0, 0.98, 0.1, 0.4, 0.7));
