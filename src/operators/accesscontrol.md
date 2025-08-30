## Application of using Bitwise Operators in JS

#### Access Control System

Bitwise operators are powerful tools for managing binary data. One practical use case is in implementing an access control system. Let's break down how this can be done step-by-step.

#### Access Control System Using Bitwise Operators

In this example, we will use bitwise operators to manage permissions for read, write, and execute operations.

### Step 1: Define Permission Constants

First, define constants for each type of permission using their decimal equivalents:

```javascript
const readPermission = 4;    // Binary: 100
const writePermission = 2;   // Binary: 010
const executePermission = 1; // Binary: 001
```

### Step 2: Initialize Permissions

Initialize a variable to store the permissions. Initially, it is set to 0, meaning no permissions:

```javascript
let myPermission = 0;
```

### Step 3: Add Permissions Using Bitwise OR (`|`)

Use the bitwise OR operator to add permissions. The bitwise OR operator allows us to combine multiple permissions:

```javascript
myPermission = myPermission | readPermission | writePermission;
console.log(myPermission); // Output: 6
```

**Explanation:**

- `readPermission` is 4 (binary `100`)
- `writePermission` is 2 (binary `010`)
- `4 | 2` results in 6 (binary `110`), meaning both read and write permissions are granted.

### Step 4: Check Permissions Using Bitwise AND (`&`)

To check if a specific permission is granted, use the bitwise AND operator:

```javascript
let message = (myPermission & readPermission) ? 'yes' : 'no';
console.log(message); // Output: yes
```

**Explanation:**

- `myPermission & readPermission` checks if the `readPermission` bit is set in `myPermission`.
- If the result is not 0, it means the permission is granted.

### Step 5: Remove a Permission and Check Again

To demonstrate how removing a permission affects the check:

```javascript
myPermission = myPermission & ~readPermission;
message = (myPermission & readPermission) ? 'yes' : 'no';
console.log(message); // Output: no
```

**Explanation:**

- `~readPermission` inverts the bits of `readPermission`, making it `011`.
- `myPermission & ~readPermission` clears the `readPermission` bit in `myPermission`.

### Practical Example

Here is the complete code from the lecture, along with the explanations:

```javascript
const readPermission = 4;    // Binary: 100
const writePermission = 2;   // Binary: 010
const executePermission = 1; // Binary: 001

let myPermission = 0;
myPermission = myPermission | readPermission | writePermission;
console.log(myPermission); // Output: 6 (Binary: 110)

let message = (myPermission & readPermission) ? 'yes' : 'no';
console.log(message); // Output: yes

// Remove readPermission and check again
myPermission = myPermission & ~readPermission;
message = (myPermission & readPermission) ? 'yes' : 'no';
console.log(message); // Output: no
```

### Summary of Bitwise Operators in Access Control

- **Bitwise OR (`|`)**: Used to add permissions.
- **Bitwise AND (`&`)**: Used to check if a specific permission is granted.
- **Bitwise NOT (`~`)**: Used to invert bits, helpful for clearing specific permissions.

### Key Takeaways

- **Permissions as Flags**: Each bit in a binary number represents a different permission (flag). By combining these flags, you can manage multiple permissions efficiently.
- **Bitwise OR**: Combines multiple flags.
- **Bitwise AND**: Checks if a specific flag is set.
- **Bitwise NOT**: Inverts bits, useful for clearing flags.

Understanding these concepts allows for efficient and powerful manipulation of binary data, which is useful in many real-world applications beyond access control systems.

---