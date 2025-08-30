## Logical Operators with Non Booleans

In JavaScript, logical operators can be used with non-boolean values, which makes them extremely powerful. These operators include logical AND (&&), logical OR (||), and logical NOT (!).

**Logical OR (||)**

• **Returns the first truthy value** it encounters.

• If all values are falsy, it returns the last value.

**Syntax**:

```javascript
operand1 || operand2
```

**Examples**:

```javascript
console.log(false || 'Pratham'); // Output: 'Pratham'
console.log(null || 0 || undefined || 'Hello' || 42); // Output: 'Hello'
console.log(false || 0 || ''); // Output: ''
```

In the above examples, the logical OR operator stops at the first truthy value and returns it. If no truthy value is found, it returns the last falsy value.

**Truthy and Falsy Values**

In JavaScript, values can be categorized as either “truthy” or “falsy”.

**Falsy Values:**

1. undefined

2. null

3. 0

4. false

5. '  ' (empty string)

6. NaN

> Anything that is not falsy is considered truthy.

**Logical AND (&&)**

• **Returns the first falsy value** it encounters.

• If all values are truthy, it returns the last value.

**Syntax**:

```javascript
operand1 && operand2
```

**Examples**:

```javascript
console.log(true && 'Pratham'); // Output: 'Pratham'
console.log(42 && null && 'Hello'); // Output: null
console.log('Hello' && 42 && true); // Output: true
```

In the above examples, the logical AND operator stops at the first falsy value and returns it. If all values are truthy, it returns the last truthy value.

**Logical NOT (!)**

• **Returns the opposite boolean value** of its operand.

• Converts the operand to a boolean value if it is not already.

**Syntax:**

```javascript
!operand
```

**Examples**:

```javascript
console.log(!true); // Output: false
console.log(!0); // Output: true
console.log(!'Hello'); // Output: false
```

The logical NOT operator converts its operand to a boolean value and then returns the opposite.

**Summary**

• **Logical OR (****||****)**: Returns the first truthy value or the last value if all are falsy.

• **Syntax**: operand1 || operand2

• Example: console.log(false || 'text'); // ‘text’

• **Logical AND (****&&****)**: Returns the first falsy value or the last value if all are truthy.

• **Syntax**: operand1 && operand2

• Example: console.log('Hello' && 42); // 42

• **Logical NOT (****!****)**: Converts the operand to a boolean value and returns the opposite.

• **Syntax**: !operand

• Example: console.log(!0); // true

Understanding these behaviors helps in writing concise and effective conditional expressions in JavaScript.

---
