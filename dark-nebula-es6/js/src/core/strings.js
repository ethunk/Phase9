reduceString = (str, amount) => {
  let re = new RegExp(`(.)(?=\\1{${amount}})`,"g");
  return str.replace(re, "");
  // the "g" at the end is a flag that means global search
  //(.) - means match any single character, remember group. The () forms a group
  // x(?=y) Matches 'x' only if 'x' is followed by 'y'. This is called a lookahead.
  // \\1{"+amount+"} is the lookahead
  //{n} Matches at least n occurrences of the preceding expression. N must be a positive integer.
  // \1 - subsitute group 1
  // http://www.rexegg.com/regex-quickstart.html
  // look at positive lookahead, means that ?=

};

reverseString = (str) => {
  let reverseString = "";
  for (i = str.length-1; i > -1; i--) {
    reverseString += str[i];
  }
  return reverseString;
};
