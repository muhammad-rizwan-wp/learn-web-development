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
//greeting("Muhammad Rizwan", "Asslamualikum");
// alert(sqare(10));
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
//cat.meow();
//cat.food.favorite;
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
// console.log(myFavNo[1]);
/*----------------------------------------------- END -----------------------------------------------------*/

/*---------------------------------------------- START ----------------------------------------------------*/
/* ===> Day 5 <=== */
/**
 * Making Decisions
 * */

let checkAge = 20;
/*
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
*/
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
/*
console.log(doubleMe(10));
console.log(trippleMe(10));
console.log(quadrupleMe(10));
*/
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

// console.log(nameList);

let dogList = pets.filter(onlyDogsFunc);

function onlyDogsFunc(item) {
  return item.species == "Dog";
}

// console.log(dogList);

/*----------------------------------------------- END -----------------------------------------------------*/

/*---------------------------------------------- START ----------------------------------------------------*/
/* ===> Day 8 <=== */
/**
 * Variable Scope & Context / this keyword
 * Scope is the biggest source of confusion regarding variables
 * Context is the biggest source of confusion regarding objects
 * Let keyword uses BLOCK-SCOPE
 * Var Keyword uses FUNCTION-SCOPE (Very less used currently because of it scope)
 */

/**>>> SCOPE <<<**/

function myFunc() {
  let myName = "Muhammad Rizwan";
}

// myFunc();
// console.log(myName);

let myName2 = "Muhammad Rizwan I";

function myNameF() {
  myName2 = "Muhammad Rizwan II";
  if (2 + 2 == 4) {
    let myName2 = "Muhammad Rizwan III";
    console.log("Inside If Block:-" + myName2);
  }
  console.log("Inside Function:-" + myName2);
}

// console.log("Global Scope:-" + myName2);
// myNameF();

/**>>> CONTEXT <<<**/
/**
 * Inside object we passed value it own function so we usee the THIS keyword
 * THIS keyword pointing enclosing object
 * The THIS keyword points towards the object that is executing the current function
 *  */

let john = {
  firstName: "John",
  lastName: "Doe",
  driveCar() {
    function iAmFunction() {
      console.log(this); // It return WINDOW object of JS not our john object
    }
    iAmFunction();
    console.log(this.firstName + " " + this.lastName + " is driving a car");
  },
};
// john.driveCar();

function singASong() {
  console.log(this.firstName + " " + this.lastName + " is singing a song");
}

// singASong.call(john);
/*----------------------------------------------- END -----------------------------------------------------*/

/*---------------------------------------------- START ----------------------------------------------------*/
/* ===> Day 9 <=== */
/* Misc: Must We Know Them */

let myNum = [10, 100, 1000, 10000];

/**>>> Anonymous Function <<<**/
// document.addEventListener("click", function () {
//   console.log("Anonymous Function Clicked ✅");
// });

let doubleMeAnn = myNum.map(function (item) {
  return item * 2;
});

// console.log("DoubleMe using Anonymous: " + doubleMeAnn);

/**>>> Arrow Function <<<**/
// document.addEventListener("click", () => {
//   console.log("Arrow Function Clicked ✅");
// });

let doubleMeArr = myNum.map((item) => item * 2);

// console.log("DoubleMe using Arrow: " + doubleMeArr);

let john2 = {
  firstName: "Muhammad",
  lastName: "Rizwan",
  driveCar() {
    let iAmFunction = () => console.log(this);
    iAmFunction();
    console.log(this.firstName + " " + this.lastName + " is driving a car");
  },
};
// john2.driveCar();

/**>>> Function Hoisting <<<**/

// console.log(countDigit);
let countDigit = 20;

/** Only functiuon declerative is HOISTED */
// cool();
function cool() {
  console.log("This is super coooooool");
}

/**>>> Template Literals <<<**/
let petName = "DoggyDe";
/*
console.log("Hey, my pet name is " + petName + ".");
console.log(`Hey, my pet name is ${petName}.`);
*/
/*----------------------------------------------- END -----------------------------------------------------*/

/*---------------------------------------------- START ----------------------------------------------------*/
/* ===> Day 10 <=== */
/**---> WEB BROWSER PRACTICE <---**/

let todoForm = document.getElementById("todo-form");
let inputTodoForm = document.querySelector("#todo-form input");
let todoList = document.getElementById("todo-list");

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  createItem(inputTodoForm);
});

function createItem(item) {
  let htmlTemplate = `<li class="mb-3">${item.value} <button onclick="handleDelete(this)" class="bg-red-500 text-white px-2 py-1 rounded text-sm">Delete</button></li>`;
  todoList.insertAdjacentHTML("beforeend", htmlTemplate);
  inputTodoForm.value = "";
  inputTodoForm.focus();
}

function handleDelete(element) {
  element.parentElement.remove();
}

/*----------------------------------------------- END -----------------------------------------------------*/
