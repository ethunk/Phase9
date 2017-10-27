containsNumber = (string) => {
  let regex = /\d/; //same as /[0-9]/
  let found = regex.test(string);
  return found;
};

containsRepeatingLetter = (string) => {
  let regex = /([a-zA-Z])\1/;
  let found = regex.test(string);
  return found;
};

endsWithVowel = (string) => {
  let regex = /([aeiouAEIOU])$/;
  let found = regex.test(string);
  return found;
};

captureThreeNumbers = (string) => {
  let regex =/\d{3}/;
  let found = string.match(regex);
  if (!!found) {
    return found[0];
  }
  return !!found;
};

matchesPattern = (string) => {
  let regex = /\b(\d{3})-(\d{3})-(\d{4})\b/;
  // '\b' matches for a word boundary
  return regex.test(string);
};

isUSD = (string) => {
  let regexOne = /^(?!0\.00)[$][1-9]\d{0,2}(,\d{3})*(\.\d{2})?$/;
  return regexOne.test(string);
};
