/*
Write a for loop that prints out the factorial of the number 12:

A factorial is calculated by multiplying a number by all the numbers below it. For instance, 3! or "3 factorial" is 3 * 2 * 1 = 6

3! = 3 * 2 * 1 = 6
4! = 4 * 3 * 2 * 1 = 24
5! = 5 * 4 * 3 * 2 * 1 = 120

Save your final answer in a variable called solution and print it to the console.
*/
//1 get every num (from 12 to 1)
//2 multiply all numbers above
//3 store the caluculation to var called solution 
//4 print solution
//12*11*10*9*8*7*6*5*4*3*2*1


let solution = 1;

for (let f = 12; f > 0; f--) {
   solution *= f;
}

//s=5*1, s=

console.log(solution);