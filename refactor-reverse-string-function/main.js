let reverseString = (word) => {
  let result = '';
  for (i = 0; i < word.length; i++) {
    result = word[i] + result;
  }
  return result;
};

// Test the reverseString function, and print results to the console.
let words = ['racecar', 'Andy', 'boolean', 'redrum'];
let reversedWords = ['racecar', 'ydnA', 'naeloob', 'murder'];

words.forEach(function(element, i) {
  let reversedWord = reverseString(element);
  let result = (reversedWord == reversedWords[i]);
  let outputString = `The reverse of '${element}' is: ${reversedWord}.\n ${result} \n\n`;
  console.log(outputString);
});
