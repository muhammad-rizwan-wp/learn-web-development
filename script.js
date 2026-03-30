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

/*---------------------------------------------- START ----------------------------------------------------*/
/* ===> Day 4 <=== */
/**
 * Array
 * A collection of items
 * */

let myFavNo = [29, 17, 2, 5, 2000];
let myWords = ["WordPress", "JS", "Theme Development", "Plugin Development"];
let faimlyTree = [
  {
    name: "Muhammad Rizwan",
    age: 26,
    education: "BE in Software",
    relationship: "F",
  },
  {
    name: "Muhammad Abu Bakr",
    age: 5,
    education: "PG",
    relationship: "S",
  },
  {
    name: "Muhammad Umar",
    age: 4,
    education: "PG",
    relationship: "S",
  },
  {
    name: "Fatima bint Rizwan",
    age: 6,
    education: "PG",
    relationship: "D",
  },
];
myWords.push("React");
myFavNo.pop();
console.log(myFavNo[1]);
/*----------------------------------------------- END -----------------------------------------------------*/

/*---------------------------------------------- START ----------------------------------------------------*/
/* ===> Day 5 <=== */
/**
 * Making Decisions
 * */

let checkAge = 20;

if (checkAge >= 18) {
  console.log("Your're eligible for VOTE");
} else {
  console.log("Your're not eligible for VOTE");
}

let count = 9;

while (count <= 20) {
  console.log("There're " + count + " counts.");
  count++;
}
/*----------------------------------------------- END -----------------------------------------------------*/

/*---------------------------------------------- START ----------------------------------------------------*/
/* ===> Day 6 <=== */
/**
 * High-Order-Functions
 * A H-O-F is a function that either: A) Accepts a function as a arguments B) Return a function
 * */

// Ex: A
document.addEventListener("click", myFuncName);
function myFuncName() {
  //console.log("Thanks for clicking 😃");
}

// Ex: B

/*
function doubleMe(x) {
  return x * 2;
}
function trippleMe(x) {
  return x * 3;
}
function quadrupleMe(x) {
  return x * 4;
}
*/
// console.log(doubleMe(10));

function createMultiplier(multiplier) {
  return function (x) {
    return x * multiplier;
  };
}

let doubleMe = createMultiplier(2);
let trippleMe = createMultiplier(3);
let quadrupleMe = createMultiplier(4);

console.log(doubleMe(10));
console.log(trippleMe(10));
console.log(quadrupleMe(10));

/*----------------------------------------------- END -----------------------------------------------------*/

/*---------------------------------------------- START ----------------------------------------------------*/
/* ===> Day 7 <=== */
/**
 * Returning vs Mutating
 *
 */

let pets = [
  {
    name: "MeowMe",
    species: "Cat",
    age: 2,
  },
  {
    name: "DoggyDe",
    species: "Dog",
    age: 3,
  },
];

/* 
console.log(
  pets.push({
    name: "DoggyNe",
    species: "Dog",
    age: 1,
  }),
);

console.log(pets);
*/

let nameList = pets.map(nameOnlyFunc);

function nameOnlyFunc(item) {
  return item.name;
}

console.log(nameList);

let dogList = pets.filter(onlyDogsFunc);

function onlyDogsFunc(item) {
  return item.species == "Dog";
}

console.log(dogList);

/*----------------------------------------------- END -----------------------------------------------------*/
