## Comparison Operators in JavaScript

Comparison operators are used to compare the value of a variable with another value. The result of such comparisons is a boolean value: either `true` or `false`.

#### 1. Relational Operators

Relational operators compare two values and determine the relational aspect between them.

##### Greater Than (`>`)

Checks if the value on the left is greater than the value on the right.

```javascript
let x = 1;
console.log(x > 0); // Output: true
```

##### Greater Than or Equal To (`>=`)

Checks if the value on the left is greater than or equal to the value on the right.

```javascript
console.log(x >= 1); // Output: true
```

##### Less Than (`<`)

Checks if the value on the left is less than the value on the right.

```javascript
console.log(x < 1); // Output: false
```

##### Less Than or Equal To (`<=`)

Checks if the value on the left is less than or equal to the value on the right.

```javascript
console.log(x <= 1); // Output: true
```

##### Example Code for Relational Operators

```javascript
let x = 1;

// Relational Operators
console.log(x > 0);  // true
console.log(x >= 1); // true
console.log(x < 1);  // false
console.log(x <= 1); // true
```

#### 2. Equality Operators

Equality operators check if values are equal or not equal.

##### Strict Equality (`===`)

Checks if the value on the left is strictly equal to the value on the right. This means both the value and the type must be the same.

```javascript
console.log(x === 1); // Output: true
```

##### Strict Inequality (`!==`)

Checks if the value on the left is not equal to the value on the right.

```javascript
console.log(x !== 1); // Output: false
```

##### Example Code for Equality Operators

```javascript
let x = 1;

// Equality Operators
console.log(x === 1); // true
console.log(x !== 1); // false
```

### Summary

In JavaScript, comparison operators include:

- **Greater Than (`>`)**: Checks if the value on the left is greater than the value on the right.
- **Greater Than or Equal To (`>=`)**: Checks if the value on the left is greater than or equal to the value on the right.
- **Less Than (`<`)**: Checks if the value on the left is less than the value on the right.
- **Less Than or Equal To (`<=`)**: Checks if the value on the left is less than or equal to the value on the right.
- **Strict Equality (`===`)**: Checks if the value on the left is strictly equal to the value on the right.
- **Strict Inequality (`!==`)**: Checks if the value on the left is not equal to the value on the right.

Understanding these operators allows you to make comparisons in your code, which is essential for decision-making and control flow in programming.

---
