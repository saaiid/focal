/* const args = process.argv.slice(2);

console.log('args', args);
console.log(parseInt(args[0]) + parseInt(args[1])); */

/* function sum(a, b) {
  return a + b;
}

console.log(sum(2, 3)); // 5
console.log(sum(0, -5)); // -5
console.log(sum(10, 20)); */ // 30

function sumFromProcessArgv(){
  const args = process.argv.slice(2);
  return parseInt(args[0]) + parseInt(args[1])
}
console.log(sumFromProcessArgv())





