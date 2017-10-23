// your code, here

let rami = 88;
let natoya = 92;
let bill = 68;
let susie = 100;

let sasha = 82;
let mohammed = 98;
let jennifer = 94;
let ken = 92;

let weAreRuby = [sasha, mohammed, jennifer, ken];
let justReact = [rami, natoya, bill, susie];

// Calculate the average score for each mentor group
let weAreRubyTotal = 0;
let justReactTotal = 0;

weAreRuby.forEach(function(element) {weAreRubyTotal = weAreRubyTotal + element;});
justReact.forEach(function(element) {justReactTotal = justReactTotal + element;});

weAreRubyAverage = Math.round(weAreRubyTotal/weAreRuby.length);
justReactAverage = Math.round(justReactTotal/justReact.length);

// caluclate that number of students with a passing grade

let studentsPassing = 0;

weAreRuby.forEach(function(element) {if (element > 69) {studentsPassing++;}});
justReact.forEach(function(element) {if (element > 69) {studentsPassing++;}});

averageTextWeAreRuby = 'The average of Mentor Group - We are Ruby Score was ' + weAreRubyAverage;
averageTextJustReact = 'The average of Mentor Group - JustReact was ' + justReactAverage;
passingStudentsText = 'The number of students with passing quiz grades is ' + studentsPassing;
console.log(averageTextWeAreRuby);
console.log(averageTextJustReact);
console.log(passingStudentsText);
