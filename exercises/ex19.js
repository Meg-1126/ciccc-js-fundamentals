/*
Call the emotions() function so that it prints the output you see below, but instead of passing the laugh() function as an argument, pass an inline function expression instead.

emotions("happy", laugh(2)); // you can use your laugh function from the previous quizzes
Prints: "I am happy, haha!"
*/

function displayMessage (emotion, laughMessage) {
   return "I am " + emotion + ", " + laughMessage(5) + "!"
}

console.log(displayMessage("happy", function laugh(num)
{
   let result = "";
   for(let i = 0; i < num; i++) {
      result += "ha";
   }
   return result;
}
));


// const laugh = function(ha) {
 
//    let test = "";
//    for (let i = 0; i < ha; i++) {
//      test += "ha";
//    }
//    return test;
//  }
 
//  console.log(laugh(3)+"!");





