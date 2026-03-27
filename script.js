/*---------------------------------------------- START ----------------------------------------------------*/

/* ===> Day 1 & 2 <=== */
/**
 * JS is bigger than the WEB-BROWSER
 * In JavaScript, anything wrapped in quotes is treated as a string.
 *
 * */

document.title = "My Page";
document.body.style.backgroundColor = "lightblue";

/**
 * What is a FUNCTION?
 * A function is a reusable block of code that performs a specific task.
 * Functions are like action words (verbs).
 * Inside the parentheses, we define PARAMETERS (placeholders for data).
 * When we call the function, we pass ARGUMENTS (actual values).
 */

/* CREATION */
function greet() {
  alert("Hi, Dev 😃");
}

function greeting(name, message) {
  alert(name + ", " + message + ".");
}

function sqare(num) {
  return num * num;
}
/* INVOKATION */
// greet();
greeting("Muhammad Rizwan", "Asslamualikum");
alert(sqare(10));
/*----------------------------------------------- END -----------------------------------------------------*/

/*---------------------------------------------- START ----------------------------------------------------*/
/* ===> Day 3 <=== */
/**
 * Object
 * Inside object the function of keyword we doesn't mentioned
 * We can add a object inside object (NEST-OBJECT)
 * */

let catName = "Neeon";
let catAge = 5;

function meow() {
  alert("Meooooowwwwwww");
}

let cat = {
  name: "Neeon",
  age: 5,
  eyeColor: "Blue",
  meow() {
    alert("Meoooowwwwww");
  },
  food: {
    favorite: "Tuna",
    leastFavorite: "Banana",
  },
};
cat.meow();
cat.food.favorite;
/*----------------------------------------------- END -----------------------------------------------------*/
