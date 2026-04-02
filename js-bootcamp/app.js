/*>>> LET | CONST | VAR <<<*/

/********************************************************************
 * VARIABLES
 * A variable is a named storage location used to hold data.
 * Always use clear and meaningful names so the purpose of the variable is easy to understand.
 *
 * CONST:
 * - Used to declare a constant variable.
 * - The value must be assigned at the time of declaration.
 * - Once assigned, the value cannot be reassigned (immutable reference).
 *
 * LET:
 * - Used to declare variables that can change over time.
 * - Block-scoped (only accessible within the block where it is defined).
 * - Preferred over 'var' in modern JavaScript.
 *
 * VAR (Avoid using):
 * - Function-scoped, not block-scoped.
 * - Can cause unexpected behavior due to hoisting and scope issues.
 * - Not recommended in modern JavaScript.
 *
 * UNDEFINED:
 * - If a variable is declared but not assigned a value,
 *   JavaScript automatically sets it to 'undefined'.
 *
 ********************************************************************/

const accountId = 29;
let accountEmail = "k17sw29@muet.edu.pk";
var accountPassword = "K17SW";
cityName = "NWS | KC";
let accountStatus;

/*
console.table([
  accountId,
  accountEmail,
  accountPassword,
  cityName,
  accountStatus,
]);
*/

/********************************** - End - **********************************/

/*>>> DATA-TYPE | ECMA Standards <<<*/

/********************************************************************
 *  "use strict":
 * - Enables strict mode in JavaScript.
 * - Helps write safer and cleaner code by catching common mistakes.
 * - Prevents usage of undeclared variables and other unsafe actions.
 * - Modern JavaScript engines already follow many strict rules, but
 *   explicitly using it is still a good practice.
 *
 * ECMAScript (ECMA):
 * - An organization (ECMA International) defines standards for JavaScript.
 * - JavaScript follows the ECMAScript specification (ES5, ES6/ES2015, etc.).
 *
 * DATA TYPES:
 * 🔹 PRIMITIVE TYPES (Immutable values)
 * 1. Number:
 *    - Represents both integer and floating-point numbers.
 *    - Safe integer range: -(2^53 - 1) to (2^53 - 1)
 *    - Special values: Infinity, -Infinity, NaN
 * 2. BigInt:
 *    - Used for very large integers beyond Number limit.
 *    - Example: 123456789012345678901234567890n
 * 3. String:
 *    - Represents text (single, double, or backticks).
 * 4. Boolean:
 *    - Logical values: true / false
 * 5. null:
 *    - Represents intentional absence of value (empty value).
 *    - Type is technically "object" (this is a known JS bug).
 * 6. undefined:
 *    - A variable declared but not assigned any value.
 * 7. Symbol:
 *    - Used to create unique identifiers (mostly in advanced use cases).
 *
 * 🔹 NON-PRIMITIVE (REFERENCE TYPES)
 * 1. Object:
 *    - Collection of key-value pairs.
 *    - Includes:
 *        - Objects {}
 *        - Arrays []
 *        - Functions
 * 🔹 ADDITIONAL IMPORTANT NOTES:
 * - JavaScript is dynamically typed:
 *   → You don’t need to declare the type of a variable.
 * - typeof operator:
 *   → Used to check the data type of a value.
 *   → Example: typeof "hello" → "string"
 * - Arrays:
 *   → Special type of object used to store ordered data.
 * - Functions:
 *   → Treated as first-class objects in JavaScript.
 * - NaN:
 *   → Means "Not a Number", but its type is still Number.
 * - null vs undefined:
 *   → null = intentionally empty
 *   → undefined = not assigned yet
 *
 ********************************************************************/
("use strict");

/********************************** - End - **********************************/

/*>>> DATA-TYPE Conversion <<<*/

/********************************************************************
 * >>> DATA TYPE CONVERSION (TYPE CASTING) <<<
 * - In real-world applications, especially when working with forms,
 *   APIs, or request bodies, we often receive data in unknown formats.
 * - To use that data correctly, we convert it into the required type.
 * - This process is called "Type Conversion" or "Type Casting".
 * 🔹 EXPLICIT CONVERSION (Manual)
 * - We manually convert values using built-in functions:
 *   Number(value)   → Converts value to a number
 *   String(value)   → Converts value to a string
 *   Boolean(value)  → Converts value to true/false
 * 🔹 IMPORTANT CASES & EDGE BEHAVIOR
 * 1. Invalid Number Conversion:
 *    - If conversion fails, result is NaN (Not a Number)
 *    Example:
 *      Number("123abc") → NaN
 * 2. null Conversion:
 *    - Number(null) → 0
 *    - This can be misleading because:
 *      null = intentional empty value
 *      0 = actual numeric value
 * 3. undefined Conversion:
 *    - Number(undefined) → NaN
 * 4. Boolean Conversion:
 *    - Falsy values:
 *        false, 0, "", null, undefined, NaN
 *    - Everything else is truthy
 * 5. String Conversion:
 *    - String(null) → "null"
 *    - String(undefined) → "undefined"
 * 🔹 IMPLICIT CONVERSION (Automatic / Coercion)
 * - JavaScript sometimes converts types automatically.
 *   Example:
 *     "5" + 2   → "52"   (number → string)
 *     "5" - 2   → 3      (string → number)
 * - This can lead to unexpected bugs, so use explicit conversion when possible.
 *
 * 🔹 BEST PRACTICES
 * - Always validate input before conversion.
 * - Use Number.isNaN(value) to check for NaN.
 * - Avoid relying on implicit conversions.
 * - Be careful when converting null and undefined.
 *
 ********************************************************************/

let scoreNull = null; // After conversion to Number = 0
let score = "333b";

// console.log(typeof score);

let scoreNum = Number(score);
// console.log(typeof scoreNum);
// console.log(scoreNum);

let isLoggedIn = 1;
// let isLoggedIn = "";  // return false
// let isLoggedIn = "MYNAME";  // return true

let boolIsLoggedIn = Boolean(isLoggedIn);
// console.log(boolIsLoggedIn);

let myNum = 33;
let stringNum = String(myNum);
// console.log(stringNum);
// console.log(typeof stringNum);

/********************************** - End - **********************************/

/*>>> Why String to Number conversion is confusing ? <<<*/

/********************************************************************
 * - JavaScript performs "type coercion" (automatic type conversion), which can lead to unexpected results, especially with strings and numbers.
 *
 * 🔹 ADDITION OPERATOR (+) BEHAVIOR
 * - The (+) operator works differently depending on the data types:
 * 1. If ANY operand is a string → concatenation happens
 *    Example: 5 + "5"   → "55" |  "5" + 5   → "55"
 * 2. If both operands are numbers → normal addition (5 + 5 → 10)
 * 3. Mixed multiple values:
 *    5 + 5 + "5" → "105" (First: 5 + 5 = 10 → then "10" + "5" = "105")
 *    "5" + 5 + 5 → "555" (First: "5" + 5 = "55" → then "55" + 5 = "555")
 *
 * 🔹 OTHER OPERATORS (-, *, /)
 * - These operators ALWAYS try to convert values into numbers:
 *   "5" - 2 → 3 | "5" * 2 → 10 | "5" / 2 → 2.5
 *
 * 🔹 UNARY PLUS (+) FOR CONVERSION
 * - The unary plus (+) converts values into numbers:
 *   +true   → 1 | +false  → 0 | +""     → 0 | +"123"  → 123 | +"abc"  → NaN
 *
 * 🔹 WHY IT'S CONFUSING
 * - Same operator (+) does BOTH:  → Addition | → String concatenation
 * - Execution order matters (left-to-right evaluation).
 * - Implicit conversion is not always obvious.
 *
 * 🔹 BEST PRACTICES
 * - Avoid relying on implicit coercion.
 * - Always convert values explicitly:
 *      Number(value)
 *      parseInt(value)
 *      parseFloat(value)
 * - Use strict equality (===) instead of (==)
 *   to avoid automatic type conversion.
 *
 ********************************************************************/

// let value = 3;
// let negValue = -value;
// console.log(negValue);
// console.log(typeof negValue);

// let str1 = "Muhammad ";
// let str2 = "Rizwan";
// let str3 = str1 + str2;
// console.log(str3);

// console.log(1 + "2");
// console.log("1" + 2);
// console.log(1 + 2 + "2");

// console.log(+true); // 1: becuse of Conversion
// console.log(+""); // 0: becuse of Conversion

/********************************** - End - **********************************/

/*>>> Comparsion of DATATYPES <<<*/

/********************************************************************
 * - JavaScript performs implicit type conversion (coercion) during comparisons, which can lead to confusing results.
 * 🔹 BASIC COMPARISON WITH TYPE COERCION
 * - When comparing different data types, JavaScript tries to convert values into a common type (usually Number).
 *   Example: "2" > 1   → true (String "2" is converted to Number 2)
 * 🔹 COMPARISON WITH null
 * - null behaves differently in comparisons:
 *   null > 0    → false | null == 0   → false |  null >= 0   → true
 * - Why?
 *   → In comparisons (>, <, >=, <=), null is converted to 0
 *   → But in equality (==), null only equals undefined
 * 🔹 null vs undefined
 *   null == undefined   → true |  null === undefined  → false
 * 🔹 STRICT vs LOOSE COMPARISON
 * 1. Loose Equality (==):
 *    - Performs type conversion
 *    - Can give unexpected results
 *       "2" == 2 → true
 * 2. Strict Equality (===):
 *    - No type conversion
 *    - Checks both value AND type
 *       "2" === 2 → false
 * 🔹 IMPORTANT EDGE CASES
 *     undefined > 0   → false
 *     undefined < 0   → false
 *     undefined == 0  → false
 *     NaN == NaN      → false
 *     (Use Number.isNaN() to check NaN)
 * 🔹 BEST PRACTICES
 * - Always prefer strict equality (=== and !==)
 * - Avoid comparing different data types directly
 * - Be cautious when using null and undefined in comparisons
 *
 ********************************************************************/

// console.log("2" > 1);
// console.log("02" > 1);

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

// console.log("2" === 2); // return false
