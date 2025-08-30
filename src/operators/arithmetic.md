## Arithmetic Operators

Arithmetic operators in JavaScript are used for performing basic mathematical calculations. Here's a breakdown of each operator with examples.

#### 1. Addition (`+`)

The addition operator adds two values.

```javascript
let x = 10;
let y = 3;
console.log(x + y); // Output: 13
```

#### 2. Subtraction (`-`)

The subtraction operator subtracts the second value from the first.

```javascript
console.log(x - y); // Output: 7
```

#### 3. Multiplication (`*`)

The multiplication operator multiplies two values.

```javascript
console.log(x * y); // Output: 30
```

#### 4. Division (`/`)

The division operator divides the first value by the second.

```javascript
console.log(x / y); // Output: 3.3333333333333335
```

#### 5. Remainder (`%`)

The remainder operator returns the remainder after dividing the first value by the second.

```javascript
console.log(x % y); // Output: 1
```

#### 6. Exponentiation (`**`)

The exponentiation operator raises the first value to the power of the second value.

```javascript
console.log(x ** y); // Output: 1000
```

### Increment and Decrement Operators

#### 7. Increment (`++`)

The increment operator increases the value of a variable by 1. It can be used in two ways: before the variable (prefix) and after the variable (postfix).

- **Prefix Increment (`++x`):**
  The value of `x` is incremented by 1 first, and then the new value is returned.
  
  ```javascript
  console.log(++x); // Output: 11 (x is now 11)
  ```

- **Postfix Increment (`x++`):**
  The current value of `x` is returned first, and then `x` is incremented by 1.
  
  ```javascript
  console.log(x++); // Output: 11 (x is now 12 after this statement)
  console.log(x);   // Output: 12
  ```

#### 8. Decrement (`--`)

The decrement operator decreases the value of a variable by 1. It can also be used in two ways: before the variable (prefix) and after the variable (postfix).

- **Prefix Decrement (`--x`):**
  The value of `x` is decremented by 1 first, and then the new value is returned.
  
  ```javascript
  console.log(--x); // Output: 11 (x is now 11)
  ```

- **Postfix Decrement (`x--`):**
  The current value of `x` is returned first, and then `x` is decremented by 1.
  
  ```javascript
  console.log(x--); // Output: 11 (x is now 10 after this statement)
  console.log(x);   // Output: 10
  ```

### Summary

To summarize, JavaScript provides the following arithmetic operators:

- **Addition (`+`)**: Adds two values.
- **Subtraction (`-`)**: Subtracts the second value from the first.
- **Multiplication (`*`)**: Multiplies two values.
- **Division (`/`)**: Divides the first value by the second.
- **Remainder (`%`)**: Returns the remainder of dividing the first value by the second.
- **Exponentiation (`**`)**: Raises the first value to the power of the second value.
- **Increment (`++`)**: Increases the value of a variable by 1.
- **Decrement (`--`)**: Decreases the value of a variable by 1.

Understanding these operators will help you perform various calculations and manipulations with numbers in JavaScript, just like in mathematics.

---