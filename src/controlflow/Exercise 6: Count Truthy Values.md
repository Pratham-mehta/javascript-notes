# Exercise 6: Count Truthy Values

### Concept: Truthy and Falsy Values

To understand how to solve this exercise, let's quickly refresh your memory on **truthy** or **falsy** values.

> Sometimes when we have an `if` statement, we might pass a boolean `true` or `false` as the condition. 
> 
> **For example**: we might have a constant called `isActive` set to `true`. When we use this constant as the condition, we get a "Hello" message on the console because this is a boolean `true`. **(see the code below)**
> 
> ```js
> const isActive = true;
> if (isActive) console.log('Hello');
> ```
> 
> * However, sometimes what we have in our `if` statement is not necessarily a boolean value. It could be a **string, a number**, or an **object**. 
> 
> * In these cases, the JavaScript engine tries to convert that value to something that is *like* a boolean but is <u>**not strictly a boolean**</u>.
> 
> **Example 1: Truthy** <br>
> 
> Let's say I have a constant called name and set it to a string, `'Mosh'`. Obviously, name is a string; it is <u>not a boolean true or false</u>. However, the JavaScript engine tries to interpret this as truthy or falsy.
> 
> ```js
> const name = 'Mosh'; // Truthy Value
> if (name) console.log('Hello');
> ```
> 
> **Output** : Hello

> **IMP to Note that:**
> 
> When we run this code, you can see we still see the "Hello" message because we are dealing with a string of characters. This is what we call a **truthy** value. It is not the boolean `true`, it is truthy.

> **Example 2: Falsy**:
> 
> In contrast, if we had an empty string, the JavaScript engine would save this as falsy. Again, it is not the boolean false, it is falsy.
> 
> ```js
> const name = '';
> if (name) console.log('Hello');
> ```
> 
> Now when we run this code, you no longer see the "Hello" message.

### The Complete List of Falsy Values

Here is the quick review of the list of falsy values in JavaScript.

- `undefined`

- `null`

- `''` (Empty string)

- `false` (The boolean itself)

- `0`

- `NaN` (Not a Number)

---

### Exercise Description

**Your Job:** Create a function called `countTruthy` which takes an array and returns the number of **truthy** elements in this array.

#### Testing Methodology

Here is an example of how we will test this. I will declare an array with mixed values and pass it to our function.

**Test Case 1**: Numbers

If I declare an array and set it to [1, 2, 3], we have 3 truthy values.

```js
const array = [1, 2, 3];
console.log(countTruthy(array));
```

**Expected Output:** `3`

**Test Case 2**: Adding Falsy Values

Now, if we add 0 here, because 0 is a falsy value, we should still get 3. If you add null, undefined, and an empty string, we should still get 3.

```js
const array = [0, null, undefined, '', 1, 2, 3];
console.log(countTruthy(array));
```

**Expected Output:** `3`

**Test Case 3**: Removing Truthy Values

If I remove one of the numbers, let's say 1, we get 2.

```js
const array = [0, null, undefined, '', 2, 3];
console.log(countTruthy(array));
```

> **Student Pause Point:** Go ahead, do this exercise. And when you're done, come back and continue watching.

### Solution: Counting Truthy Values

Alright, to count the number of truthy values, follow these steps:

1. **Initialize the Count**

First, I am going to declare a variable called count and initialize it to 0.

2. **Iterate Over the Array**

Now we need to use a for...of loop to iterate this array. For each element, we need to check to see if that element is truthy or not.

3. **The Truthy Check**

If the value is truthy, we are going to increment count.

```js
function countTruthy(array) {
    let count = 0;
    for (let value of array) {
        if (value)
            count++;
    }
    return count;
}
```

**Teaching Explanation**: How the Check Works <br>

* Simply pass the value into the **if condition**. That value might be a boolean or a non-boolean. If it is not a boolean, the JavaScript engine tries to interpret it as **truthy** or **falsy**. If the result is truthy, then the count will be incremented.
4. **Return the Result**

Finally, we return this count.

> **Key Learning**: Code Optimization
> 
> Note right here I am not comparing this value with all those falsy values.
> 
> In other words, I didn't write code like this:
> 
> ```js
> // AVOID THIS APPROACH
> if (value !== false || value !== undefined || value !== null ...)
> ```
> 
> This is a very poor way of writing this code. We don't want to have 5 conditions here for every falsy value. Simple as that.
