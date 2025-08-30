### Bitwise Operators in JavaScript

Bitwise operators treat their operands as a set of 32 bits (binary digits), rather than as decimal, hexadecimal, or octal numbers. They operate on the binary representations of the numbers.

Here are the basic bitwise operators:

#### 1. Bitwise AND (`&`)

- **Compares each bit of the first operand to the corresponding bit of the second operand.**
- **If both bits are 1, the corresponding result bit is set to 1. Otherwise, the corresponding result bit is set to 0.**

**Example:**

```javascript
5 & 1
```

Binary representation:

```
5 = 0101
1 = 0001
---------
Result: 0001 (which is 1 in decimal)
```

**Explanation:** Only the last bit is 1 in both numbers, so the result is 1.

#### 2. Bitwise OR (`|`)

- **Compares each bit of the first operand to the corresponding bit of the second operand.**
- **If at least one of the bits is 1, the corresponding result bit is set to 1. Otherwise, it is set to 0.**

**Example:**

```javascript
5 | 1
```

Binary representation:

```
5 = 0101
1 = 0001
---------
Result: 0101 (which is 5 in decimal)
```

**Explanation:** At least one bit is 1 in the first, second, and fourth positions, so the result is 5.

#### 3. Bitwise XOR (`^`)

- **Compares each bit of the first operand to the corresponding bit of the second operand.**
- **If the bits are different, the corresponding result bit is set to 1. If they are the same, the result bit is set to 0.**

**Example:**

```javascript
5 ^ 1
```

Binary representation:

```
5 = 0101
1 = 0001
---------
Result: 0100 (which is 4 in decimal)
```

**Explanation:** Only the second bit is different, so the result is 4.

#### 4. Bitwise NOT (`~`)

- **Inverts all the bits of the operand.**
- **Changes 0s to 1s and 1s to 0s.**

**Example:**

```javascript
~5
```

Binary representation:

```
5 = 0000 0101
~5 = 1111 1010 (which is -6 in decimal, using two's complement representation)
```

**Explanation:** All bits are inverted.

#### 5. Bitwise Left Shift (`<<`)

- **Shifts the bits of the first operand to the left by the number of positions specified by the second operand.**
- **New bits are filled with 0s.**

**Example:**

```javascript
5 << 1
```

Binary representation:

```
5 = 0101
5 << 1 = 1010 (which is 10 in decimal)
```

**Explanation:** All bits are shifted one position to the left, and a 0 is added at the end.

#### 6. Bitwise Right Shift (`>>`)

- **Shifts the bits of the first operand to the right by the number of positions specified by the second operand.**
- **For non-negative numbers, new bits are filled with 0s.**

**Example:**

```javascript
5 >> 1
```

Binary representation:

```
5 = 0101
5 >> 1 = 0010 (which is 2 in decimal)
```

**Explanation:** All bits are shifted one position to the right, and a 0 is added at the beginning.

#### 7. Bitwise Zero Fill Right Shift (`>>>`)

- **Shifts the bits of the first operand to the right by the number of positions specified by the second operand.**
- **New bits are filled with 0s.**

**Example:**

```javascript
5 >>> 1
```

Binary representation:

```
5 = 0101
5 >>> 1 = 0010 (which is 2 in decimal)
```

**Explanation:** All bits are shifted one position to the right, and a 0 is added at the beginning.

### Summary

Bitwise operators perform operations on the binary representations of numbers:

- **AND (`&`)**: Returns 1 if both bits are 1.
- **OR (`|`)**: Returns 1 if at least one bit is 1.
- **XOR (`^`)**: Returns 1 if bits are different.
- **NOT (`~`)**: Inverts the bits.
- **Left Shift (`<<`)**: Shifts bits to the left, filling with 0s.
- **Right Shift (`>>`)**: Shifts bits to the right, filling with 0s for non-negative numbers.
- **Zero Fill Right Shift (`>>>`)**: Shifts bits to the right, filling with 0s.

These operators are useful for low-level programming tasks, such as manipulating individual bits within a byte.

---