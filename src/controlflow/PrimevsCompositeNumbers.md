### **Concept: Prime vs. Composite Numbers**

Before starting the coding exercise, it is important to understand the mathematical concept of prime and composite numbers.

- **Prime Number:** A number whose factors are only 1 and itself. It cannot be divided evenly into another number.
  
  - *Example:* **11** is prime because its only factors are 1 and 11.
  
  - *Example:* **13** is prime because it can only be divided evenly by 1 and 13.

- **Composite Number:** A number that has many factors.
  
  - *Example:* **12** is a composite number.
  
  - *Factors of 12:* 1, 2, 3, 4, 6, and 12.
  
  - When we divide 12 by these numbers, we won't get any remainder (the remainder is 0).

---

### **Exercise: The `showPrimes` Function**

**Exercise Description:** Create a function called `showPrimes` that takes a `limit` argument and shows all the prime numbers up to this limit.

![](/Users/prathammehta/Library/Application%20Support/marktext/images/2025-11-24-16-11-24-image.png)

**Expected Output (for limit 20):**

```markup-templating
2
3
5
7
... (and so on)
```

#### **Step 1: Implementing the Basic Logic**

- To implement this, we need a loop that starts from 2 (**since the first prime number is 2**) up to the limit. 

- Then, for each number, we need to check if it is prime or not using a nested loop.

**Important Note on Variable Naming**:

When writing nested loops, avoid using generic names like i and j because it becomes confusing for someone reading the code.

- **Outer Loop:** Instead of `i`, use `number`. This iterates through the numbers from 2 up to the limit.

- **Inner Loop:** Instead of `j`, use `factor`. This loop finds the factors of that specific number.

**Initial Code Structure:**

```js
function showPrimes(limit) {
    // Outer loop: iterates through numbers 2 to limit
    for (let number = 2; number <= limit; number++) {

        let isPrime = true; 

        // Inner loop: checks for factors
        // We start factor at 2 and go up to (but not including) the number itself
        for (let factor = 2; factor < number; factor++) {

            // If number can be evenly divided by factor
            if (number % factor === 0) {
                isPrime = false; 
                break; // Optimization
            }
        }

        if (isPrime) console.log(number);
    }
}
```

**Teaching Explanations:**

1. **The Inner Loop Logic:** We want to see if the current `number` has a factor *other* than 1 and itself.
   
   - We do not include 1 in the loop because every number is divisible by 1.
   
   - We do not include the `number` itself because every number is divisible by itself.

2. **The Modulus Operator:** `if (number % factor === 0)` checks if the remainder is 0. If it is, the number has a factor and is **not** prime.

3. **The `isPrime` Variable:** We assume the number is prime (`true`) initially. If the condition in the inner loop is met, we set `isPrime` to `false`.

4. **Optimization with `break`:** If we find even *one* factor, the number is definitely not prime. There is no need to continue running the inner loop; it would just waste the computer's processing power. We use the `break` keyword to jump out of the inner loop immediately.

---

### **Refactoring: Single Responsibility Principle**

> **Student Pause Point:** "Now here's another challenge for you. I want you to modify this code, extract a new function, and make sure each function is small and responsible for a single task. Pause the video, when you're done, come back and continue watching."

**The Problem with the Previous Code**: <br>

If you look at the **inner loop** and the logic inside it, all we are doing is <u>checking to see if a number is prime or not</u>. This logic does not necessarily have to be part of the showPrimes function.

**The Solution**:

We should apply the **Single Responsibility Principle**. We want small functions where each function is responsible for a single task. We can extract the logic into a reusable function called isPrime.

#### **Step 2: Creating the `isPrime` Function**

We can extract the logic and make it cleaner and more elegant.

- **Optimization:** Instead of breaking the loop and updating a variable (`isPrime`), we can simply `return false`immediately if we find a factor.

- **Default Return:** If the loop finishes and we haven't returned false, it means we didn't find any factors, so we `return true`.

- **Formatting:** We can remove curly braces `{}` for loops and if-statements that contain only a single statement to make the code less cluttered.

```js
function isPrime(number) {
    // Loop from 2 to almost the number
    for (let factor = 2; factor < number; factor++)
        if (number % factor === 0) 
            return false; // Found a factor, not prime

    return true; // No factors found, is prime
}
```

#### **Step 3: Updating `showPrimes`**

Now, the `showPrimes` function becomes very simple. It only iterates through numbers and calls our new reusable function.

```js
function showPrimes(limit) {
    for (let number = 2; number <= limit; number++)
        if (isPrime(number)) console.log(number);
}
```

**Testing the Result**:

If we pass 10 to this function:

```js
showPrimes(10);
```

**Output:**

```markup-templating
2
3
5
7
```

### **Key Learning Points**

- **Code Clarity:** With these changes, we now have two very simple functions. As Mosh says, "If you give this function to the dumbest person in the world they will understand it."

- **Nested Loops:** Generally speaking, nested loops are a bit hard to understand.

- **Refactoring Indicator:** Whenever you have a nested loop, that is probably an indication that you can extract the logic in the inner loop and put it somewhere else in a different function.
