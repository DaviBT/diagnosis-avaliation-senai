///// variaveis, constantes, operações lógicas e aritméticas, estrutura de decisão
var apple = 2;
const appleText = " apples";
const singleAppleText = " apple";

if (apple > 1) {
  console.log("There are " + apple + singleAppleText);
} else {
  console.log("There is " + apple + appleText);
}

//////////// Array, repetições, vetor

let array = ["apple", 3, "pineapple", 4];
let howManyApplesTheyWant = array.slice(0, 2);
console.log(howManyApplesTheyWant);

let numOfApples = howManyApplesTheyWant.slice(1, 2);
while (numOfApples != 5) {
  numOfApples++;
}
console.log("They want " + numOfApples + " apples");

//// Matriz

let studentsGrades = ["John", [8, 7, 9], "Marie", [9, 8, 9]];
let johnGrades = studentsGrades.slice(0, 2);
console.log(johnGrades);

/// Clean Code : espaçamento e encadeamento do código, além de variáveis novas a cada processo