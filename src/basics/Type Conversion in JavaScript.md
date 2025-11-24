# Type Conversion in JavaScript

**Type conversion** is the process of changing the data type of a value to another data type. For example, we can convert:

- Strings to numbers
- Numbers to booleans
- Booleans to strings
- Numbers to strings
- Booleans to numbers

## Why Type Conversion Matters

When we accept user input, the data type of that input is a **string**. If we need to use it for any sort of math, we need to convert it to a number.

---

## Exercise 1: User Age Input Problem

**Exercise Description:** Create a variable that accepts user age input and adds 1 to it.

### Initial Code (With Problem)

```javascript
let age = window.prompt("How old are you?");
age += 1;
console.log(age);
```

**User Input:** 25

**Output:** `251`

> **What's happening here?** When we accept user input, it's a string data type - a series of characters. By adding 1, we appended 1 to the end of our string. We're not increasing our age by one, we're doing **string concatenation**.

---

## The Solution: Using the Number Function

Now that we understand the problem, let's see how to fix it. After accepting our user input and before making any changes to it, we're going to convert our user input into a number.

### Step-by-Step Fix

1. Accept the user input with `window.prompt()`
2. **Before making any changes**, reassign age using the `Number()` function
3. The `Number()` function will convert another data type (such as a string or boolean) into a number
4. Place your age variable within that function

```javascript
let age = window.prompt("How old are you?");
age = Number(age);
age += 1;
console.log(age);
```

**User Input:** 25

**Output:** `26`

> **Key Learning:** This is the reason you may want to type convert - because different data types behave differently.

---

## Checking Data Types

Let's display the type of our age variable to see what's happening:

```javascript
let age = window.prompt("How old are you?");
age = Number(age);
age += 1;
console.log(age);
console.log(typeof age);
```

**User Input:** 25

**Output:**

```
26
number
```

### Without Type Conversion

If we remove the type conversion:

```javascript
let age = window.prompt("How old are you?");
age += 1;
console.log(age);
console.log(typeof age);
```

**User Input:** 25

**Output:**

```
251
string
```

This is not exactly what we would like. That's a reason why type conversion is important.

---

## Exercise 2: Converting Different Values to Different Data Types

**Exercise Description:** Let's see what happens when we convert different values into different data types.

### Setup

```javascript
let x;
let y;
let z;
```

We'll assign the same value to all three variables and convert them to different data types.

---

## Test Case 1: Converting "Pizza"

```javascript
x = "Pizza";
y = "Pizza";
z = "Pizza";

x = Number(x);    // Convert to number
y = String(y);    // Convert to string
z = Boolean(z);   // Convert to boolean

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);
```

**Output:**

```
NaN number
Pizza string
true boolean
```

> **What's happening:**
> 
> - If you attempt to convert alphabetical characters into a number, that variable will be `NaN` which means **not a number**. The data type is still `number` though, as you can see.
> - The word "Pizza" is already a string, so converting it into a string really doesn't do anything. That's why the value is still "Pizza" and the data type is still a string.
> - If you convert a string into a boolean (booleans again are either true or false), converting the word "Pizza" into a boolean returns `true` and the data type is boolean.

> **Key Takeaway:** Basically, as long as there's some value here and you convert it into a boolean, it will always be `true`.

---

## Test Case 2: Converting Zero

```javascript
x = 0;
y = 0;
z = 0;

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);
```

**Output:**

```
0 number
0 string
false boolean
```

> **What's happening:**
> 
> - We can convert 0 into a number - it doesn't contain any alphabetical characters
> - X contains zero, it's a number
> - Y is zero but it's treated as a string
> - Z contains `false` and it's a boolean

---

## Test Case 3: Converting Empty Strings

```javascript
x = "";
y = "";
z = "";

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);
```

**Output:**

```
0 number
 string
false boolean
```

> **What's happening:**
> 
> - Typecasting an empty string as a number is still zero
> - We have an empty string for y
> - With our boolean it's `false`

### Practical Use Case for String to Boolean

> **Why might you want to type cast a string as a boolean?** That's one way in which you can check to see if user input is empty - like did somebody type something in? If a user skipped user input, it's most likely going to be an empty string. Then you can check to see if this is `false`, then the user didn't type in anything and you can let them know.

---

## Test Case 4: Converting Undefined Variables

```javascript
let x;
let y;
let z;

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);
```

**Output:**

```
NaN number
undefined string
false boolean
```

> **What's happening:**
> 
> - Converting an undefined variable to a number results in not a number (`NaN`)
> - Our string is "undefined"
> - Our boolean variable returns `false`

---

## Summary

So that's the basics of type conversion. It's the process of changing the data type of a value to another.

**It's pretty important when you accept user input because:**

- When you accept user input, it's a **string data type**
- At times you may want to convert it to a **number** if you need to include that number with any sort of arithmetic expressions
- Or convert it to a **boolean** if you're checking to see if that user input was completed

We'll have more practice with this in the future. And well, that is type conversion in JavaScript.

---

## Quick Reference

### Type Conversion Functions

- `Number(value)` - Converts to number
- `String(value)` - Converts to string
- `Boolean(value)` - Converts to boolean

### Checking Data Types

- `typeof variable` - Returns the data type as a string

### Boolean Conversion Rules

- Any non-empty string → `true`
- Empty string `""` → `false`
- Any number except 0 → `true`
- `0` → `false`
- `undefined` → `false`
