const findWaldo = function(names) {
  names.forEach(function(name, index) {
    if (name === "Waldo") {
      console.log(`Found Waldo at index ${index}!`);
    }
  });
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"]);