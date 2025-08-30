### Operator Precedence in JavaScript

Operator precedence determines the order in which operators are evaluated in expressions. Operators with higher precedence are evaluated before operators with lower precedence.

### Simple Example

Consider the following expression:

```javascript
let result = 3 + 4 * 2;
```

In this example, the multiplication (`*`) operator has higher precedence than the addition (`+`) operator, so the multiplication is performed first:

1. `4 * 2` is evaluated first, resulting in `8`.
2. Then `3 + 8` is evaluated, resulting in `11`.

### Precedence Table

Here’s a simplified table of some common operators, ordered from highest to lowest precedence:

| Precedence  | Operator Type            | Operators                         | Associativity |
| ----------- | ------------------------ | --------------------------------- | ------------- |
| 1 (highest) | Member Access            | `.`                               | Left-to-right |
| 2           | Function Call            | `()`                              | Left-to-right |
| 3           | New Object               | `new`                             | Right-to-left |
| 4           | Increment/Decrement      | `++`, `--`                        | Right-to-left |
| 5           | Logical NOT, Bitwise NOT | `!`, `~`                          | Right-to-left |
| 6           | Multiplication/Division  | `*`, `/`, `%`                     | Left-to-right |
| 7           | Addition/Subtraction     | `+`, `-`                          | Left-to-right |
| 8           | Bitwise Shift            | `<<`, `>>`, `>>>`                 | Left-to-right |
| 9           | Relational               | `<`, `<=`, `>`, `>=`              | Left-to-right |
| 10          | Equality                 | `==`, `!=`, `===`, `!==`          | Left-to-right |
| 11          | Bitwise AND              | `&`                               | Left-to-right |
| 12          | Bitwise XOR              | `^`                               | Left-to-right |
| 13          | Bitwise OR               |                                   |               |
| 14          | Logical AND              | `&&`                              | Left-to-right |
| 15          | Logical OR               |                                   | \|            |
| 16          | Conditional (Ternary)    | `? :`                             | Right-to-left |
| 17 (lowest) | Assignment               | `=`, `+=`, `-=`, `*=`, `%=`, etc. | Right-to-left |

### Associativity

In addition to precedence, operators also have associativity, which can be either left-to-right or right-to-left. Associativity determines the order in which operators of the same precedence level are evaluated.

- **Left-to-Right Associativity**: Operators are evaluated from left to right.
  - Example: `3 - 4 + 5` is evaluated as `(3 - 4) + 5`.
- **Right-to-Left Associativity**: Operators are evaluated from right to left.
  - Example: `a = b = c` is evaluated as `a = (b = c)`.

### Practical Examples

#### Example 1: Mixing Addition and Multiplication

```javascript
let result = 5 + 3 * 2;
```

- Multiplication has higher precedence than addition.
- `3 * 2` is evaluated first, resulting in `6`.
- Then `5 + 6` is evaluated, resulting in `11`.

#### Example 2: Using Parentheses to Change Precedence

```javascript
let result = (5 + 3) * 2;
```

- Parentheses have the highest precedence.
- `5 + 3` is evaluated first, resulting in `8`.
- Then `8 * 2` is evaluated, resulting in `16`.

#### Example 3: Logical Operators

```javascript
let a = true;
let b = false;
let result = a && !b;
```

- The logical NOT (`!`) operator has higher precedence than the logical AND (`&&`) operator.
- `!b` is evaluated first, resulting in `true`.
- Then `a && true` is evaluated, resulting in `true`.

#### Example 4: Ternary Operator

```javascript
let result = true ? false ? 1 : 2 : 3;
console.log(result); // 2
```

- false ? 1 : 2 is evaluated first, resulting in 2.
- Then true ? 2 : 3 is evaluated, resulting in 2.

### Summary

- **Operator Precedence**: Determines the order in which operators are evaluated.
  - Higher precedence operators are evaluated before lower precedence operators.
- **Associativity**: Determines the order in which operators of the same precedence level are evaluated.
  - Left-to-right or right-to-left.
- **Use Parentheses**: Parentheses can be used to explicitly define the order of evaluation in complex expressions.

Understanding operator precedence and associativity helps in writing clear and accurate expressions in JavaScript, avoiding unexpected results and making the code more readable.

---