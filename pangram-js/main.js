// define the isPangram() function
let isPangram = (sentence) => {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let sentenceLowerCase = sentence.toLowerCase();
  for (i = 0; i < alphabet.length; i++) {
    if ((sentenceLowerCase.includes(alphabet[i])) == false) {
      var answer = false;
      break;
    } else {
      var answer = true;
    }
  }
  return answer;
};

// test the isPangram() function, and print results to the console.
let testData = [
  { sentence: 'The quick brown fox jumps over the lazy dog.', pangram: true },
  { sentence: 'The quick onyx goblin jumps over the lazy dwarf.', pangram: true },
  { sentence: 'Grumpy wizards make toxic brew for the evil queen and jack.', pangram: true },
  { sentence: 'Not a pangram', pangram: false },
  { sentence: '', pangram: false },
];

testData.forEach((trial) => {
  let result = isPangram(trial.sentence);
  let correct = (result == trial.pangram);
  if (correct === true) {
    console.log(`isPangram gave a correct result for: ${trial.sentence}`);
  } else {
    console.log(`isPangram gave an incorrect result for: ${trial.sentence}`);
  }
});
