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

/********************************** - End - **********************************/

/* >>> STACK & HEAP <<< */
/********************************************************************
 * STACK MEMORY (Call Stack):
 * - Stores primitive values:
 *   number, string, boolean, null, undefined, symbol, bigint
 * - Also stores function execution contexts (function calls).
 * - Works in LIFO order (Last In, First Out).
 * - Very fast access.
 * - When assigning primitives:
 *   A COPY of the value is created.
 *   Example:  let a = 10;  let b = a;   // copy of value b = 20;  // a is still 10
 * HEAP MEMORY:
 * - Stores non-primitive types (reference types):
 *   objects, arrays, functions
 * - Memory is allocated dynamically.
 * - Slower access compared to stack.
 * - Variables store a REFERENCE (memory address) to the value.
 *   Example: let obj1 = { name: "Ali" };  let obj2 = obj1;  // reference copy
 *   obj2.name = "Ahmed";   // obj1.name is also "Ahmed"
 * KEY DIFFERENCES:
 * - Primitive types → stored directly in stack → copied by value
 * - Reference types → stored in heap → accessed via reference
 * GARBAGE COLLECTION:
 * - JavaScript automatically manages memory.
 * - If no reference points to an object, it is removed
 *   from heap memory (Garbage Collector).
 * IMPORTANT NOTES:
 * - Even for objects, the reference itself is stored in the stack,
 *   but the actual data lives in the heap.
 * - "const" does NOT make objects immutable — it only prevents
 *   reassignment of the reference.
 *   Example:
 *   const user = { name: "Ali" }; user.name = "Ahmed"; // allowed   // user = {} ❌ not allowed
 *
 ********************************************************************/

// STACK

let channelName = "Guru";
let updatedChannelName = channelName;

updatedChannelName = "Guru G";
//console.log(channelName); // Original name not updated because the update operation will be performed on the copy, not the original.
//console.log(updatedChannelName);

// HEAP

let userOne = {
  email: "user@users.com",
  upi_id: "userupi@upi.com",
};

let userTwo = userOne; // Here, userTwo receives the reference of userOne.

userTwo.email = "user_2@users.com";
//console.log(userOne.email); // Due to the reference, the value is updated on both sides.
//console.log(userTwo.email);

/********************************** - End - **********************************/

/* >>> STRINGS <<< */

/********************************************************************
 *   Strings can be created in two ways:
 *   1. Primitive string → let str = "hello"
 *   2. String object   → let str = new String("hello")
 *   NOTE:
 *   - Primitive strings are recommended (faster & commonly used).
 *   - String objects are rarely used in real-world applications.
 *   - Strings are IMMUTABLE:
 *    → Original string does NOT change
 *    → All methods return a NEW string
 *   - Template literals (` `):
 *    → Support multi-line strings
 *    → Allow embedded expressions using ${}
 *   - Even when using String object:
 *     → Actual behavior is usually treated like primitive string
 * -----------------------------------------------------------------
 * STRING CONCATENATION:
 * - Old way: using + operator. Example: name + " text"
 * - Modern way: Template Literals (backticks ` `).   Example: `${name} text`
 * - This modern method is called STRING INTERPOLATION.
 * MEMORY BEHAVIOR:
 * - Strings are PRIMITIVE → stored as values.
 * - When copied, a NEW value is created (no reference sharing).
 * ACCESSING CHARACTERS:
 * - Strings are index-based (0-based index).  Example: str[0]
 * COMMON PROPERTIES & METHODS:
 * - length: Returns total number of characters (including spaces)
 * - toUpperCase() / toLowerCase():  Converts string case (returns new string)
 * - charAt(index): Returns character at given index
 * - indexOf(value):  Returns first occurrence index. Returns -1 if not found
 * SUBSTRING METHODS:
 * - substring(start, end): Extracts part of string. Does NOT support negative indexes
 * - slice(start, end): Extracts part of string. Supports negative indexes
 * WHITESPACE HANDLING:
 * - trim(): Removes spaces from start and end
 * SEARCH & REPLACE:
 * - replace(old, new): Replaces FIRST occurrence only
 * - includes(value): Checks if value exists → returns true/false
 * CONVERSION METHODS:
 * - split(separator): Converts string into array based on separator
 *
 ********************************************************************/
let name = "Muhammad Rizwan";
let name_u = new String("Muhammad Rizwan");
let univeristyName = "MUET SZAB Campus";

/*
console.log(name + " graduate from " + univeristyName);
console.log(`${name} graduate from the ${univeristyName}`);
console.log(name_u[0]);
console.log(name_u.__proto__);
console.log(name_u.length);
console.log(name_u.toUpperCase());
console.log(name_u.charAt(9));
console.log(name_u.indexOf('n'));
let fistName = name_u.substring(0, 8); // It doesn't support reverse index like -8/-5
console.log(fistName);
let lastName = name_u.slice(9, 15);
console.log(lastName);
let namee = "     TOE     ";
console.log(namee);
console.log(namee.trim());
let url = "https://brain.com/whatsapp%20banking";
console.log(url.replace("%20", "-"));
console.log(url.includes("%20"));
console.log(name_u.split(" "));
*/

/********************************** - End - **********************************/

/* >>> NUMBERS & MATH <<< */

/********************************************************************
 * NUMBER CREATION:
 * - Numbers can be created in two ways:
 *   1. Primitive → let num = 100
 *   2. Object    → let num = new Number(100)
 *   NOTE:
 *   - Primitive numbers are recommended.
 *   - Number objects are rarely used in real-world code.
 * NUMBER METHODS:
 * - toFixed(n): Returns string with number rounded to n decimal places. Example: (12.345).toFixed(2) → "12.35"
 * - toPrecision(n):  Formats number to n significant digits. Example: (123.456).toPrecision(4) → "123.5"
 * - toLocaleString(): Converts number to readable format based on locale.  Example: (1000000).toLocaleString() → "1,000,000"
 * NUMBER CONSTANTS:
 * - Number.MAX_SAFE_INTEGER: Largest safe integer in JS (2^53 - 1)
 * - Number.MIN_SAFE_INTEGER: Smallest safe integer in JS (-(2^53 - 1))
 * MATH OBJECT:
 * - Built-in object in JavaScript (no need to create instance)
 * COMMON MATH METHODS:
 * - Math.abs(x):  Returns absolute value. Example: Math.abs(-5) → 5
 * - Math.round(x): Rounds to nearest integer. Example: Math.round(4.6) → 5
 * - Math.ceil(x): Rounds UP to nearest integer. Example: Math.ceil(4.1) → 5
 * - Math.floor(x): Rounds DOWN to nearest integer. Example: Math.floor(4.9) → 4
 * - Math.random(): Generates random number between 0 (inclusive) and 1 (exclusive)
 *   Common formula:
 *   → Random number between min and max:
 *     Math.floor(Math.random() * (max - min + 1)) + min
 * IMPORTANT NOTES:
 * - Most number methods return STRINGS (like toFixed, toPrecision).
 * - JavaScript uses floating-point arithmetic:
 *   → May cause precision issues. Example: 0.1 + 0.2 !== 0.3
 * - Always be careful with large numbers beyond safe integer range.
 *
 ********************************************************************/

const scoreValue = 500;
const balance = new Number(100);
/*
console.log(scoreValue);
console.log(balance);
console.log(balance.toString());
console.log(balance.toFixed(2));
const prec = 12.896;
console.log(prec.toPrecision(3));
const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN'));
*/

/*
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.2));
console.log(Math.min(4, 3, 2, 5));
console.log(Math.max(4, 3, 2, 5));
console.log(Math.random() * 10 + 1);
const min = 10;
const max = 20;
console.log(
  Math.floor(Math.random() * (max - min + 1)) + max,
  Math.floor(Math.random() * (max - min + 1)) + max,
  Math.floor(Math.random() * (max - min + 1)) + max,
  Math.floor(Math.random() * (max - min + 1)) + max,
  Math.floor(Math.random() * (max - min + 1)) + max,
);
*/

/********************************** - End - **********************************/

/* >>> Date & Time <<< */

/********************************************************************
 * - JavaScript provides a built-in Date object to handle date and time.
 * - Dates are based on milliseconds since: January 1, 1970 (Unix Epoch)
 *   CREATING DATES:
 * - Current date & time: let now = new Date();
 * - Specific date: let d1 = new Date("2025-01-01");        // ISO format (recommended)
 *   let d2 = new Date(2025, 0, 1);          // (year, monthIndex, day)
 *   NOTE:
 *   - Month index starts from 0 (0 = January, 11 = December)
 * COMMON METHODS:
 * - getFullYear():  Returns year (e.g., 2025)
 * - getMonth(): Returns month index (0–11)
 * - getDate(): Returns day of month (1–31)
 * - getDay(): Returns day of week (0 = Sunday)
 * - getHours(), getMinutes(), getSeconds(): Returns time components
 * - getTime(): Returns timestamp in milliseconds
 * SET METHODS:
 * - setFullYear(), setMonth(), setDate(), etc. Used to modify date values
 * FORMATTING DATES:
 * - toDateString(): Human-readable date
 * - toTimeString(): Human-readable time
 * - toISOString(): Standard ISO format (YYYY-MM-DDTHH:mm:ss.sssZ)
 * - toLocaleString(): Formats date based on system locale
 * TIME COMPARISON:
 * - Dates can be compared using timestamps:
 *   date1.getTime() === date2.getTime()
 * MATH WITH DATES:
 * - You can subtract dates: let diff = date2 - date1;
 *   → Result in milliseconds
 * IMPORTANT NOTES:
 * - Date object is MUTABLE (can be changed using set methods).
 * - Parsing non-standard date strings can be unreliable. → Always prefer ISO format: "YYYY-MM-DD"
 * - JavaScript handles time zones automatically, but results may vary depending on system settings.
 * FUTURE (MODERN API):
 * - A new "Temporal API" is being introduced in JavaScript to improve date/time handling.
 * - It solves issues like:  → Time zones, → Immutability, → Better formatting & calculations
 *
 ********************************************************************/

let myDate = new Date();

/*
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);
// let cusDate = new Date(2026, 1, 29);
console.log(cusDate.toDateString());
console.log(cusDate.toLocaleString());
let cusDate2 = new Date(2026, 1, 29, 10, 25);
console.log(cusDate2.toDateString());
console.log(cusDate2.toLocaleString());
//let cusDate = new Date("2026-01-29");
console.log(cusDate.toDateString());
let cusDate = new Date("01-29-2023");
console.log(cusDate.toDateString());
*/

/*
let myTime = Date.now();
let cusDate = new Date("01-29-2023");
console.log(myTime);
console.log(cusDate.getTime());
console.log(Math.floor(Date.now()/1000));
console.log(
  `Year: ${myDate.getFullYear()}\nMonth: ${myDate.getMonth()}\nDay: ${myDate.getDay()}\nMinutes: ${myDate.getMinutes()}\nHour: ${myDate.getHours()}`,
);
*/

