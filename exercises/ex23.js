/*
const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

Write a loop under each comment in the file.
Under the first, write a while loop that prints out each item of ingredients.
Under the second, write a for loop that does the same thing.
And under the third, write any loop, while or for that prints out each item of ingredients but backwards (that is, the first should be "bananas" and the last "eggs").
*/
const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
// FIRST
// let i = 0;
// while(i < 8) {
//   console.log(ingredients[i]);
//   i++;
// }
// SECOND
// for(let i = 0; i < 8; i++) {
//   console.log(ingredients[i]);
// }

// THIRD
for(let i = 7; i >= 0; i--) {
  console.log(ingredients[i]);
}