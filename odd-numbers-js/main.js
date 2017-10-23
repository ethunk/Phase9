// your code, here

for (let i = 1; i < 100; i++) {
  console.log(i);
  i = i+1;
}
let i = 1;
while (i < 100) {
  console.log(i);
  i = i+2;
}




// let buildApplePie = () => {
//   let mainIngredient = 'apples';
//   let otherIngredient = 'cinnamon';
//
//   // Here is the internal function
//   let mixIngredients = () => {
//     //  It references variables that are external to it
//     return `${mainIngredient} and ${otherIngredient}`;
//   };
//   // The outer function returns the internal function here, but notice the internal function is returned uninvoked.
//   return mixIngredients;
// };
//
//
// // We invoke the outer function it to have it return an uninvoked function. We assign it.
// let makeTodaysPie = buildApplePie();
//
// // We invoke here, and it works.
// makeTodaysPie(); //=> 'apples and cinnamon'
