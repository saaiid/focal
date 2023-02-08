var originalWords = process.argv.slice(2);
var pigLatinWords = [];

for (var i = 1; i < originalWords.length; i++) {
  console.log(originalWords[i]);
  pigLatinWords.push(translateToPigLatin(originalWords[i]));
}

console.log(pigLatinWords.join(' '));

function translateToPigLatin(word) {
  console.log("Word", word);
  console.log("First letter", word[0]);
  console.log("Rest of word", word.slice(2, word.length));
  return word.slice(1, word.length) + word[0] + "ay";
}

/* console.log("originalWords is", originalWords);
console.log("pigLatinWords is", pigLatinWords); */

