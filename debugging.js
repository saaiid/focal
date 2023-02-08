
//original code

/* function average(list) {
  var sum = 0;

  for (var num of list) {
    sum ++ num;
  }
}
  return sum / list.length;

console.log(average([3, 5, 7]));

//reverse.js
var input = process.argv[2];

if (input)
  console.log(reverse(input));

function reverse(original) {
  return orignal.split('').reverseList().join('');
} */

//Here's the corrected version of the average function:

function average(list) {
  var sum = 0;

  for (var num of list) {
    sum += num;
  }
  return sum / list.length;
}
console.log(average([3, 5, 7]));


//And here's the corrected version of the reverse function:

function reverse(original) {
  return original.split('').reverse().join('');
}

var input = process.argv[2];

if (input) {
  console.log(reverse(input));
}