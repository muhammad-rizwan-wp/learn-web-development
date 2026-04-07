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

/********************************** - End - **********************************/

/* >>> IIFE (Imediately Invoked Function Expression) <<< */

/********************************************************************
 * An IIFE is a function that is defined and executed immediately after its creation.
 * It is wrapped in parentheses to turn it into an expression, and then invoked right away.
 * Syntax:
 * (function () {
 *   // code
 * })();
 * PURPOSE:
 * - To execute code immediately after defining it.
 * - To create a separate (private) scope.
 * - To avoid polluting the global scope with variables.
 * This is useful when:
 * - Initializing an application
 * - Connecting to databases or running setup code
 * - Avoiding conflicts with global variables
 * PRIVATE SCOPE:
 * Variables declared inside an IIFE are not accessible outside, which protects your code from global scope interference.
 * NAMED IIFE:
 * (function init() {
 *   console.log("App initialized");
 * })();
 * ARROW FUNCTION IIFE:
 * (() => {
 *   console.log("Arrow IIFE");
 * })();
 * IMPORTANT NOTE (Semicolon):
 * - When using multiple IIFEs, always end the previous one with `;`
 * - Without a semicolon, JavaScript may throw an error because it
 *   tries to treat the next IIFE as a function call.
 * Example:
 * (function () {
 *   console.log("First IIFE");
 * })();
 * (function () {
 *   console.log("Second IIFE");
 * })();
 * KEY POINTS:
 * - Runs immediately after being defined
 * - Helps avoid global scope pollution
 * - Creates its own private scope
 * - Common in older JavaScript (before ES6 modules)
 *
 *********************************************************************/

(function dbConnection() {
  // Named IIFE
  // console.log("My db has been connected. ✅");
})();

((name) => {
  // Paramter IIFE & Arrow IIFE
  // console.log(`${name}, your db has been connected. ✅`);
})("Muhammad");

/********************************** - End - **********************************/

/* >>> Call Stack & JavaScript Execution Context <<< */

/********************************************************************
 * JavaScript Execution Context:
 * It defines how JavaScript runs your code behind the scenes.
 * Whenever a JS file runs, the engine creates an Execution Context.
 * TYPES OF EXECUTION CONTEXT:
 * 1) Global Execution Context (GEC)
 *    - Created when the JS file first runs.
 *    - Stored in the `this` keyword.
 *    - In browsers: `this` → window object
 *    - In Node.js: `this` → empty object {}
 * 2) Function Execution Context (FEC)
 *    - Created every time a function is invoked.
 * 3) Eval Execution Context (rarely used)
 * JavaScript is SINGLE-THREADED: Executes one operation at a time.
 *
 * TWO PHASES OF EXECUTION:
 * 1) Memory Creation Phase (MCP) / Creation Phase:
 *    - Memory is allocated for variables and functions.
 *    - Variables are initialized with `undefined`.
 *    - Functions are stored with their full definitions.
 * 2) Execution Phase (EP):
 *    - Code is executed line by line.
 *    - Variables are assigned actual values.
 *    - Functions are invoked.
 * STEP-BY-STEP EXECUTION:
 * 1) Global Execution Context (GEC) is created. `this` is assigned
 * 2) Memory Creation Phase: Variables → undefined
 *    - Functions → full definitions stored
 * 3) Execution Phase:
 *    - Variables get actual values
 *    - When a function is called:
 *        → A new Function Execution Context (FEC) is created
 *        → It has its own: Variable environment & Execution thread
 *    - Inside each function: MCP and EP run again
 *    - After execution: Function context is removed (deleted)
 *
 * CALL STACK:
 * - A data structure used to manage execution contexts.
 * - Works on LIFO (Last In, First Out) principle.
 * FLOW:
 * 1) Global Execution Context is pushed into the stack
 * 2) When a function is called:
 *    → Its context is pushed onto the stack
 * 3) When function execution completes:
 *    → It is popped (removed) from the stack
 * Example:
 * function one() {
 *   two();
 * }
 * function two() {
 *   console.log("Hello");
 * }
 * one();
 * Stack Order: GEC → one() → two() → (pop) → (pop)
 *
 * KEY POINTS:
 * - JS runs code using Execution Contexts
 * - Each function call creates a new context
 * - Call Stack manages execution order
 * - JavaScript is single-threaded
 *********************************************************************/

/********************************** - End - **********************************/

/* >>> Control Flow <<< */

/********************************************************************
 * Control Flow: Control flow defines how a program decides which code to execute and in what sequence. By default, JavaScript runs code line by line (top → bottom), but control flow statements allow us to:
 * 1. Skip code 2. Repeat code 3. Choose between multiple paths
 * It is the foundation of decision-making in programming.
 * IF - ELSE STATEMENT: Used to execute code based on conditions (true/false).
 * How it works: The condition inside 'if' is evaluated.
 * - If it is TRUE → IF block executes.
 * - If FALSE → ELSE block executes.
 * 'else if' allows checking multiple conditions step by step.
 * Only the FIRST true condition runs, and the rest are ignored.
 * Important:
 * - Conditions are converted to boolean automatically.
 * - Nested if-else (if inside another if) is also possible.
 * Use case:
 * - Decision making (age check, login check, grading system, etc.)
 * COMPARISON OPERATORS
 * Used to compare two values and return true or false.
 * >   : checks if left value is greater than right
 * <   : checks if left value is less than right
 * >=  : checks if left is greater than or equal
 * <=  : checks if left is less than or equal
 * ==  : loose equality → compares only values (performs type conversion automatically)
 * === : strict equality → compares value AND type (no type conversion, safer and predictable)
 * !=  : loose not equal
 * !== : strict not equal
 * Important: Always prefer === and !== to avoid unexpected bugs
 * - JavaScript can convert types automatically with ==,  which may lead to confusing results
 * SWITCH CASE: Used when comparing a single value against multiple fixed options.
 * How it works: Expression is evaluated once.
 * - It is compared with each 'case' using strict equality (===).
 * - When a match is found → that block runs.
 * 'break' keyword: Stops execution after a case runs.
 * - Without break → "fall-through" happens (next cases also run)
 * 'default': Optional block
 * - Runs when no case matches
 * Use case: Menu selection, day of week, role-based logic
 * Note: Better than if-else when checking many exact values
 * TRUTHY & FALSY VALUES: In JavaScript, every value can be treated as true or false. when used in conditions.
 * Falsy values (ONLY these are false): false, 0, -0, 0n (BigInt zero), "" (empty string), null, undefined, NaN
 * Truthy values: Everything else (even if it looks false!)
 * Examples: "0", "false", " " (space), [] (empty array), {} (empty object), function() {}
 * Important: Empty array [] and object {} are truthy (common confusion)
 * Used heavily in conditions like: if(value)
 * LOGICAL OPERATORS:Used to combine or modify conditions.
 * && (AND): Returns true only if ALL conditions are true.
 * Stops early if a false value is found (short-circuit)
 * || (OR): Returns true if ANY one condition is true
 * Stops early if a true value is found
 * ! (NOT): Converts true → false
 * Converts false → true
 * Important: These operators don’t always return true/false
 * They return actual values (due to short-circuiting)
 * Use case: Authentication checks, validation, multiple conditions
 * NULLISH COALESCING OPERATOR (??): Used to provide a default value ONLY when the left side is null or undefined.
 * Syntax: value ?? defaultValue
 * Behavior: If value is null or undefined → returns defaultValue
 * - Otherwise → returns value itself
 * Difference from ||: || treats ALL falsy values as missing (0, "", false). ?? treats ONLY null and undefined as missing
 * Why important: Prevents bugs when 0 or "" are valid values
 * Use case: Setting safe default values
 * TERNARY OPERATOR: A shorter way to write if-else in one line.
 * Syntax: condition ? expression_if_true : expression_if_false
 * How it works: If condition is true → first value runs
 * - If false → second value runs
 * Important: Best for simple conditions
 * - Avoid using nested ternary (hard to read)
 * Use case: Assigning values, small decisions
 * SHORT-CIRCUITING: A behavior of logical operators (&& and ||).  where evaluation stops as soon as result is determined.
 * && (AND): Returns first falsy value OR last truthy value
 * || (OR): Returns first truthy value
 * Why useful: Can replace if-else in short conditions
 * - Improves performance by skipping unnecessary checks
 * Example concept: If first condition decides the result, rest is ignored
 * Use case: Default values, conditional execution, optimization
 *
 ********************************************************************/

// if (2 == "2") {
//   console.log("Extected");
// }
// if (2 === "2") {
//   // console.log("Extected");
// }

// let tempOfRoom = 45;
// if (tempOfRoom < 50) {
//   // console.log("Temperature of room is less than 50.");
// } else {
//   // console.log("Temperature of room is greater than 50.");
// }

// const month = 5;
// switch (month) {
//   case 1:
//     console.log("Jan");
//     break;
//   case 2:
//     console.log("Feb");
//     break;
//   case 3:
//     console.log("Mar");
//     break;
//   case 4:
//     console.log("Apr");
//     break;
//   case 5:
//     console.log("May");
//     break;
//   case 6:
//     console.log("Jun");
//     break;
//   case 7:
//     console.log("Jul");
//     break;
//   case 8:
//     console.log("Aug");
//     break;
//   case 9:
//     console.log("Sept");
//     break;
//   case 10:
//     console.log("Oct");
//     break;
//   case 11:
//     console.log("Nov");
//     break;
//   case 12:
//     console.log("Dec");
//     break;
//   default:
//     console.log("Please enter proper input value. For Ex. [1-12]");
// }

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 10;
// console.log(val1);

/* >>> Ternary <<<*/
// Syntax: condition ? true : false;

const iceTeaPrice = 100;
// iceTeaPrice <= 80
//   ? console.log("Less than 80")
//   : console.log("Greater than 80");

/********************************** - End - **********************************/

/* >>> FOR LOOP <<< */

/********************************************************************
 * Used to execute a block of code repeatedly for a specific number of times.
 * Syntax: for (initialization; condition; increment/decrement) {    // code to run   }
 * How it works: 1. Initialization runs once (e.g., let i = 0)
 * 2. Condition is checked before every iteration
 * 3. If condition is true → loop body runs
 * 4. Increment/Decrement updates the loop variable
 * 5. Steps 2–4 repeat until condition becomes false
 * Use case: When you know how many times you want to run the loop
 * LOOPING THROUGH ARRAY: Arrays use index-based access (starting from 0)
 * Important: Always use i < array.length
 * If you use i <= array.length → it will go one step extra and return undefined (because index is out of range)
 * Example concept: array = [10, 20, 30]
 * length = 3 // valid indexes = 0, 1, 2
 * NESTED LOOP: A loop inside another loop
 * How it works: Outer loop runs first.
 * For each iteration of outer loop, inner loop runs completely
 * Use case: Patterns (stars, numbers)
 * Working with 2D arrays (matrix, tables)
 * Important: Time complexity increases (O(n²) or more)
 * Be careful with performance in large data
 * BREAK STATEMENT: Used to completely stop the loop execution immediately when a certain condition is met
 * Behavior: Exits the loop instantly
 * Control moves to the next statement after the loop
 * Use case: Stop searching when item is found
 * Exit early to save performance
 * CONTINUE STATEMENT: Used to skip the current iteration of the loop when a condition is met
 * Behavior: Skips only that specific iteration
 * Loop continues with the next iteration
 * Use case: Ignore unwanted values
 * Skip specific cases without stopping the loop
 * Infinite Loop:
 * If condition never becomes false, loop runs forever (e.g., missing increment)
 * Loop Control: Always ensure condition will eventually become false
 * Readability: Keep loops simple and avoid too much nesting
 *
 ********************************************************************/

// for (let i = 0; i <= 10; i++) {
//   if (i == 8) {
//     console.log(`${i} is best number.`);
//   }
//   console.log(i);
// }

for (let i = 0; i <= 5; i++) {
  // console.log(`✅ Outer Loop Value: ${i}`);
  for (let j = 0; j <= 5; j++) {
    // console.log(`Inner Loop Value: ${j}`);
    //console.log(`${i} * ${j} = ${i * j}`);
  }
  // console.log("-----------------------------------------------");
}

// const myArray = [
//   "Muhammad Rizwan",
//   "Saim",
//   "Abu Bakr",
//   "Muhammad Umar",
//   "Zinn Noorain",
// ];
// for (let index = 0; index < myArray.length; index++) {
//   const element = myArray[index];
//   console.log(element);
// }

// for (let index = 1; index <= 10; index++) {
//   if (index == 5) {
//     console.log("5 is detected");
//     break;
//   }
//   console.log(`Value of "index" is: ${index}`);
// }

// for (let index = 1; index <= 10; index++) {
//   if (index == 5) {
//     console.log("5 is detected");
//     continue;
//   }
//   console.log(`Value of "index" is: ${index}`);
// }

/********************************** - End - **********************************/

/* >>> WHILE & DO-WHILE <<< */

/********************************************************************
 * WHILE LOOP: Used to execute a block of code repeatedly as long as a given condition remains true.
 * Syntax: while (condition) {  // code,     // update (increment/decrement)  }
 * How it works: 1. Condition is checked FIRST
 * 2. If true → loop body runs
 * 3. After execution, condition is checked again
 * 4. Loop continues until condition becomes false
 * Important: Initialization (index/counter) is written OUTSIDE the loop
 * You must update the counter inside the loop
 * If you forget update → infinite loop
 * Use case: When number of iterations is NOT known beforehand
 * DO-WHILE LOOP:
 * Similar to while loop, but guarantees at least ONE execution
 * Syntax: do {    // code,    // update } while (condition);
 * How it works: 1. Loop body runs FIRST (without checking condition)
 * 2. Condition is checked AFTER execution
 * 3. If true → repeats
 * 4. If false → stops
 * Key Difference from while: while → checks condition before running
 * do-while → runs first, checks later
 * Important: Executes at least once even if condition is false
 * Use case: When code must run at least once (e.g., menu systems, user input prompts)
 * KEY DIFFERENCES:
 * while: Condition checked before execution
 * May run 0 times
 * do-while: Condition checked after execution
 * Runs at least 1 time
 *
 ********************************************************************/

// let index = 0;
// while (index <= 10) {
//   console.log(`Value of index is: ${index} out of 10`);
//   index = index + 2;
// }

// const myArray = [
//   "Muhammad Rizwan",
//   "Saim",
//   "Abu Bakr",
//   "Muhammad Umar",
//   "Zinn Noorain",
// ];

// let arrIndex = 0;
// while (arrIndex < myArray.length) {
//   console.log(`${arrIndex} at ${myArray[arrIndex]}`);
//   arrIndex++;
// }

// let scoree = 1;
// do {
//   console.log(`Socre is ${scoree}`);
//   scoree++;
// } while (scoree <= 10);

/********************************** - End - **********************************/

