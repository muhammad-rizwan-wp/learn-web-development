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
 * What is FUNCTION?
 * Functions are as action words
 * It would be a verb
 * Inside the parenthesis we can pass the data to perform the action
 * The data techinincal name is arguments
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
