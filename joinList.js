/* function joinList(arr) {
  let result = "Today I learned about ";
  if (arr.length === 0) {
      return "";
  }
  result += arr.join(', ');
  return result;
}

const conceptList = ["gists", "types", "operators", "iteration", "problem solving"];
console.log(joinList(conceptList)); */

function joinList(arr) {
  return arr.length === 0 ? "" :  arr.join(', ');
}

const conceptList = ["gists", "types", "operators", "iteration", "problem solving"];
console.log(joinList(conceptList));