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

/********************************** - End - **********************************/

/* >>> Array <<< */

/********************************************************************
 * An Array is a special type of object used to store multiple values in a single variable.
 * ➤ Key Features:
 * - Can store multiple values (of same or different data types)
 * - Ordered collection (maintains insertion order)
 * - Indexed (starts from 0)
 * - Dynamic / resizable (size can change at runtime)
 * - Zero-based indexing (first element at index 0)
 * ➤ Data Types:
 * - Can store primitive values (number, string, boolean, etc.)
 * - Can also store objects, functions, or even other arrays (nested arrays)
 * ➤ Copy Behavior:
 * - Arrays are reference types
 * - Copying creates a shallow copy (not deep copy)
 * ➤ Common Array Methods:
 * 🔹 Adding / Removing Elements:
 * - push()       → add element(s) to the end
 * - pop()        → remove last element
 * - unshift()    → add element(s) to the beginning
 * - shift()      → remove first element
 * 🔹 Searching:
 * - includes()   → checks if value exists (true/false)
 * - indexOf()    → returns index of element (-1 if not found)
 * - lastIndexOf()→ returns last occurrence index
 * - find()       → returns first matching element
 * - findIndex()  → returns index of first match
 * 🔹 Transformation:
 * - map()        → creates new array by transforming elements
 * - filter()     → returns elements that match condition
 * - reduce()     → reduces array to a single value
 * 🔹 Iteration:
 * - forEach()    → executes function on each element
 * 🔹 Slicing / Modifying:
 * - slice()      → returns a shallow copy of portion (non-destructive)
 * - splice()     → adds/removes elements (modifies original array)
 * 🔹 Conversion:
 * - join()       → converts array to string
 * - toString()   → converts array to string
 * - Array.from() → creates array from iterable
 * 🔹 Combining / Checking:
 * - concat()     → merges arrays
 * - Array.isArray() → checks if value is an array
 * 🔹 Sorting / Reversing:
 * - sort()       → sorts elements (by default as strings)
 * - reverse()    → reverses array
 * ➤ Spread & Rest:
 * - Spread (...) → expands elements (useful for copying/merging)
 * - Rest (...)   → collects multiple elements into an array
 * ➤ Important Notes:
 * - Arrays are mutable (can be changed after creation)
 * - Length property gives total number of elements
 * - Sparse arrays can exist (missing indexes)
 *
 ********************************************************************/

const myArr = [0, 1, 2, 3, 4];
const myArr2 = new Array(0, 1, 2, 3, 4);
// console.log(myArr[0]);

/*>>> ARRAY METHODS <<<*/
/*
myArr.push(6);
myArr.pop()
myArr.unshift(9)
myArr.shift()
console.log(myArr.includes(9));
console.log(myArr.indexOf(9));
const newArr = myArr.join()
console.log(newArr);
console.log(`Slice: ${myArr.slice(1, 3)}`);
console.log(`Splice: ${myArr.splice(1, 3)}`);
console.log(myArr);
*/

const marvel_heros = ["Thor", "Ironman", "Spiderman"];
const dc_heros = ["Superman", "Flash", "Batman"];

/*
marvel_heros.push(dc_heros);
console.log(marvel_heros);
const all_heros = marvel_heros.concat(dc_heros);
console.log(all_heros);
const all_heros = [...marvel_heros, ...dc_heros];
console.log(all_heros);
const multi_arr = [0, 1, 2, [3, 4, 5], 6, 7, [8, 9, 10, [21, 22, 23]]];
const single_muti_arr = multi_arr.flat(Infinity);
console.log(single_muti_arr);
console.log(Array.isArray("Muhammad"));
console.log(Array.from("Muhammad"));
console.log(Array.from({ name: "Muhammad" }));
*/

/********************************** - End - **********************************/

/* >>> Object <<< */

/********************************************************************
 * An Object is a collection of data stored in key-value pairs.
 * Ways to Create Objects:
 * - Object Literal (most common): const obj = {}
 * - Constructor (Singleton-like instance):  const obj = new Object()
 * NOTE:
 * - Literal creates separate instances
 * - Constructor can be used to create a single object instance
 * Key Features:
 * - Stores data as key-value pairs
 * - Keys are strings (or Symbols)
 * - Values can be any data type (primitive, array, function, object)
 * - Objects are mutable (can be modified after creation)
 * Accessing Values:
 * - Dot notation: obj.name
 * - Bracket notation: obj["name"] // Useful when key has spaces or is dynamic
 * Common Object Methods:
 * Static Methods (Object):
 * - Object.assign()    → copies properties (shallow copy)
 * - Object.keys()      → returns array of keys
 * - Object.values()    → returns array of values
 * - Object.entries()   → returns array of [key, value] pairs
 * - Object.freeze()    → prevents modification
 * - Object.seal()      → allows modification but no add/remove
 * - Object.hasOwn()    → checks if key exists
 * Instance Methods:
 * - hasOwnProperty()   → checks own property
 * - toString()         → converts object to string
 * Iteration:
 * - for...in loop      → iterates over keys
 * - Object.keys().forEach() → iterate keys
 * Copy Behavior:
 * - Objects are reference types
 * - Copying creates a shallow copy
 * Nested Objects:
 * - Objects can contain other objects // obj.user.name
 * Destructuring:
 * - Extract values easily: const { name, age } = obj
 * Spread Operator:
 * - Copy / merge objects: const newObj = { ...obj }
 * Optional Chaining:
 * - Safe access:   → obj?.user?.name
 * ➤ Important Notes:
 * - Order of keys is generally preserved (ES6+)
 * - Functions inside objects are called methods
 *
 ********************************************************************/

const lastDayLoggin = Symbol("lastDayLoggin");
/* >>> Object Literals  */
const JsUser = {
  name: "Muhammad",
  age: 18,
  location: "PECHS Block 6, Karachi",
  email: "muhammad@user.com",
  isLoggedIn: false,
  [lastDayLoggin]: ["Monday", "Sunday"],
};

/*
console.log(JsUser["email"]);
Object.freeze(JsUser);
JsUser.email = "muhammad@proton.com";
console.log(JsUser);
JsUser.greeting = function () {
  console.log(`Welcome to JsUser, ${this.name}`);
};
console.log(JsUser.greeting());
*/

/* >>> Singleton  */

const tinderUser = new Object();
tinderUser.id = "TU0001";
tinderUser.name = "Muhammad";
tinderUser.isLoggIn = false;

// console.log(tinderUser);

const objA = { 1: "0", 2: "A", 3: "B" };
const objB = { 4: "a", 5: "b", 6: "c" };

// const objC = Object.assign(objA, objB);
const objC = Object.assign({}, objA, objB);
// console.log(objC);

const users = [
  {
    id: 1,
    email: "user1@users.com",
  },
  {
    id: 2,
    email: "user2@users.com",
  },
  {
    id: 3,
    email: "user3@users.com",
  },
  {
    id: 4,
    email: "user4@users.com",
  },
  {
    id: 5,
    email: "user5@users.com",
  },
];

/*
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('name'));
*/

const course = {
  title: "JavaScript",
  price: 999,
  instructor: "Abu Bakr",
};

const { title, price, instructor } = course;
// console.log(title);

/********************************** - End - **********************************/

/* >>> Function <<< */

/********************************************************************
 * A function is used to group code into a reusable block.
 * It allows you to execute the same logic multiple times without rewriting it.
 * In a function definition, we declare variables known as PARAMETERS.
 * These act as placeholders for the values the function will receive.
 * When a function is called, the actual values passed are called ARGUMENTS.
 * The `return` statement is used to send a value back from the function.
 * Once a `return` statement is executed, the function stops running immediately.
 * The REST OPERATOR (...args) allows a function to accept an unlimited number of arguments.
 * It collects all remaining arguments into a single array.
 * This is useful when you don't know how many inputs will be passed.
 * Functions can be:
 * - Named or anonymous
 * - Arrow functions (shorter syntax)
 * - Stored in variables, passed as arguments, or returned from other functions
 * Functions help improve code readability, reusability, and maintainability.
 *
 *********************************************************************/

// function addTwoDigits(num1, num2) {
//   console.log(num1 + num2);
// }

function addTwoDigits(num1, num2) {
  return num1 + num2;
}
// const result = addTwoDigits(10, 12);
// console.log(`Result: ${result}`);

function calculateCartPrice(...num) {
  return num;
}

// console.log(calculateCartPrice(500, 600, 700, 800));

const user = {
  username: "Muhammad Rizwan",
  email: "muhammad@users.com",
};

function handleObject(obj) {
  console.log(`Username is ${obj.username} and email is ${obj.email}`);
}
// handleObject(user);

/********************************** - End - **********************************/

/* >>> Global & Local Scope <<< */

/********************************************************************
 * Scope defines where variables are accessible in your code.
 * GLOBAL SCOPE:
 * Variables declared outside of any block or function.
 * These can be accessed from anywhere in the program.
 * LOCAL (BLOCK) SCOPE:
 * Variables declared inside a block (curly braces `{}`),
 * such as in functions, if-else statements, loops, etc.
 * These are only accessible within that block.
 * Note:
 * Curly braces `{}` define a block scope in control structures and functions. However, in objects, `{}` are used to define structure, not scope.
 * var:
 * - NOT block-scoped (it is function-scoped).
 * - Can be accessed outside block statements like if/for.
 * - Can lead to unexpected behavior due to hoisting and scope leakage.
 * let & const:
 * - ARE block-scoped.
 * - Cannot be accessed outside their block.
 * - Accessing them before declaration results in a ReferenceError (due to the Temporal Dead Zone).
 * Best Practice:
 * - Prefer `let` and `const` over `var`.
 * - Use `const` by default, and `let` when reassignment is needed.
 * Environment Difference:
 * - In browsers, global variables are attached to the `window` object.
 * - In Node.js, global variables are attached to the `global` object.
 * - So, global scope behaves slightly differently depending on the environment.
 *
 *********************************************************************/

let a = 50;

if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
}

// console.log(a); // ReferenceError: a is not defined
// console.log(b); // ReferenceError: b is not defined
// console.log(c); // 30 [It return value out of curly braces]
// console.log(a);

/********************************** - End - **********************************/

/* >>> Scope Level & Mini Hoisting <<< */

/********************************************************************
 * NESTED SCOPE: When functions or blocks are nested inside each other:
 * - A child (inner) function CAN access variables from its parent.
 *   This is called lexical scope (or closure behavior).
 * - A parent (outer) function CANNOT access variables declared inside its child function.
 *
 * Example:
 * function parent() { let a = 10;
 * function child() {   let b = 20;
 *     console.log(a); // Accessible (parent → child)
 *   }
 *   // console.log(b); // ❌ Error (child → parent not allowed)
 * }
 *
 * The same rule applies to nested blocks like if-else statements.
 *
 * ---------------------------------------------------------------
 * MINI HOISTING (Function behavior):
 * Function Declaration: Can be used BEFORE it is defined.
 * - Fully hoisted with its definition.
 * sayHello(); // ✅ Works
 * function sayHello() {
 *   return "Hello";
 * }
 *
 * Function Expression (assigned to a variable): NOT fully hoisted.
 * - Only the variable is hoisted (depending on var/let/const), but not the function itself.
 * greet(); // ❌ Error
 * const greet = function () {
 *   return "Hi";
 * };
 * - With `let` and `const`, accessing before initialization causes a ReferenceError (Temporal Dead Zone).
 * Key Takeaways:
 * - Inner scope can access outer scope, but not vice versa.
 * - Function declarations are hoisted completely.
 * - Function expressions are NOT hoisted the same way.
 *
 *********************************************************************/

function outer() {
  const username = "Muhammad";
  function inner() {
    const email = "innner@users.com";
    console.log(username);
  }
  // console.log(email); // ReferenceError: email is not defined
  inner();
}

// outer();

if (true) {
  const username = "Muhammad Rizwan";
  if (username === "Muhammad Rizwan") {
    const userEmail = "muhammad@users.com";
    // console.log("Inner If: ", username);
  }
  // console.log(userEmail); // ReferenceError: userEmail is not defined
}

//console.log(username); // ReferenceError: username is not defined

// console.log(addOne(5));
function addOne(num) {
  return num + 1;
}
// console.log(addTwo(5)); // ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function (num) {
  return num + 2;
};

/********************************** - End - **********************************/

/* >>> THIS & Arrow Function <<< */

/********************************************************************
 * The `this` keyword refers to the current execution context.
 * Its value depends on HOW a function is called, not where it is defined.
 * GLOBAL CONTEXT: In browsers (DOM): `this` refers to the `window` object.
 * In Node.js: `this` refers to an empty object `{}` in modules.
 * INSIDE OBJECT METHODS: `this` refers to the object that is calling the method.
 * Example: const user = {
 *   name: "Ali",
 *   greet() {
 *     console.log(this.name); // "Ali"   } };
 * 
 * ARROW FUNCTIONS (ES6): Introduced in ES6 (ECMAScript 2015).
 * - Shorter syntax compared to regular functions.
 * - DO NOT have their own `this`.
 * Instead: Arrow functions inherit `this` from their surrounding (lexical) scope.
 * Example: const user = {
 *   name: "Ali",
 *   greet: () => {
 *     console.log(this.name); // ❌ Undefined (does not refer to user)
 *   } };
 * 
 * REGULAR vs ARROW FUNCTION:
 * Regular Function: Has its own `this`
 * - Value depends on how it's called
 * Arrow Function: No own `this`
 * - Uses `this` from outer scope
 * 
 * KEY POINTS:
 * - Avoid using arrow functions as object methods when you need `this`.
 * - Arrow functions are useful for callbacks and short functions.
 * - `this` behavior is one of the biggest differences between regular and arrow functions.
 * 
 *********************************************************************/

const webUser = {
  username: "Muhammad Rizwan",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.username}, welcome to our website. `);
  },
};

// webUser.welcomeMessage();
// webUser.username = "Abu Bakr";
// webUser.welcomeMessage();

function myFunc() {
  let username = "Muhammad Bakir";
  console.log(this.username);
}
// myFunc();

const myArrowF = () => {
  let username = "Muhammad Bakir";
  console.log(this);
};
// myArrowF();

// const addTwoN = (num1, num2) => {
//   return num1 + num2;
// };

const addTwoN = (num1, num2) => num1 + num2;

// console.log(addTwoN(8, 5));
