## Exercise 8: Sum of Multiples of 3 and 5

Here is another simple but great exercise that trains your programming brain.

### **Exercise Description**

I want you to create a function called `sum`. We give it a `limit`, and this function will return the sum of all the multiples of 3 and 5 from 0 up to this limit.

**Example Scenario**:

What are the multiples of 3 and 5 between 0 and 10?

- **Multiples of 3:** 3, 6, and 9

- **Multiples of 5:** 5 and 10 (We are including the number passed as the limit)

If you add these numbers together (3 + 6 + 9 + 5 + 10), the result will be **33**. That is the goal of this function.

### **Solution**:

#### **1. Initialize the Loop**

We need to start with a `for` loop. Let `i` equal 0. As long as `i` is less than or equal to the `limit`, we want to increment `i`.

```js
for (i=0;i<=limit;i++){
    // logic goes here
}
```

#### **2. check for Multiples**

Now, we want to check to see if `i` is a multiple of 3 **or** 5 using the modulus operator (`%`).

- If `i % 3 === 0` OR (`||`)

- If `i % 5 === 0`

#### **3. Calculate the Sum**

If the condition is met, we need to take `i` and add it to our `sum`. To do this, we first need to declare a variable `sum` and set it to 0.

#### **4. Return the Result**

Finally, we return the `sum`.

```js
console.log(sum(10));

function sum(limit) {
    let sum = 0;

    for (let i = 0; i <= limit; i++) {
        if (i % 3 === 0 || i % 5 === 0)
            sum += i;
    }

    return sum;
}
```

**Expected Output:**

```bash
33
```

> **Note:** If we save the changes with a limit of 10, we get 33 in the console.

### **Best Practice: Code Formatting and Readability**

Now, pay attention to how I have formatted this code.

I have added extra **vertical line breaks** to separate the initialization from the actual logic, and from the return value.

```js
function sum(limit) {
    let sum = 0; // Initialization
                 // <--- Vertical Break
    for (let i = 0; i <= limit; i++) {
        if (i % 3 === 0 || i % 5 === 0)
            sum += i; // Logic
    }
                 // <--- Vertical Break
    return sum;  // Return Value
}
```

**Why do we do this?**<br>

If we didn't have these vertical breaks, this code would look a little bit squashed, and it becomes a little bit hard to read.

As a best practice, it's always good to separate the last line—the return statement.



> **To understand the concept behind (&&) and (||)**
> 
> The reason we use the **OR (`||`)** operator instead of the **AND (`&&`)** operator comes down to exactly which numbers we want to include in our sum.
> 
> Here is the breakdown:
> 
> ##### 1. The Goal
> 
> We want to find numbers that belong to **either** group:
> 
> - The group of numbers divisible by 3 (e.g., 3, 6, 9...)
> 
> - The group of numbers divisible by 5 (e.g., 5, 10...)
> 
> ##### 2. Why `||` (OR) works
> 
> The `||` operator returns `true` if **at least one** side is true.
> 
> - Take the number **3**:
>   
>   - Is it divisible by 3? **Yes.**
>   
>   - Is it divisible by 5? **No.**
>   
>   - **Result:** Since one is true, we keep it.
> 
> - Take the number **5**:
>   
>   - Is it divisible by 3? **No.**
>   
>   - Is it divisible by 5? **Yes.**
>   
>   - **Result:** Since one is true, we keep it.
> 
> ##### 3. Why `&&` (AND) would fail
> 
> The `&&` operator returns `true` **only if BOTH** sides are true simultaneously.
> 
> - Take the number **3** again:
>   
>   - Is it divisible by 3? **Yes.**
>   
>   - Is it divisible by 5? **No.**
>   
>   - **Result:** `True && False` is **False**. The number 3 would be skipped.
> 
> If you used `&&`, you would only sum numbers that are multiples of **15** (because $3 \times 5 = 15$). So, between 0 and 10, your result would be **0** because no number in that range is divisible by both 3 and 5 at the same time.
