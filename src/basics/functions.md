## Functions

**Introduction to Functions in JavaScript**

In our study of reference types, we have explored objects and arrays. Today, we'll delve into another fundamental building block of JavaScript: functions. Functions are essential constructs in JavaScript, designed to perform tasks or calculate values. Let's begin by defining a function.

**Creating a Function**

To declare a function, we use the `function` keyword followed by a name, parentheses, and curly braces:

```javascript
function greet() {
}
```

**Function Body**

Inside the curly braces lies the body of the function. This is where we define the function's logic. For instance, if we want our function to display a message on the console, we can add a `console.log` statement:

```javascript
function greet() {
  console.log('Hello World');
}
```

Note the use of a semicolon to terminate the statement. However, when declaring the function, a semicolon is not required since we are not declaring it like a variable.

**Calling a Function**

To execute our function, we simply call it by its name followed by parentheses:

```javascript
greet(); // Outputs: Hello World
```

**Enhancing Functionality with Parameters**

The previous example is quite basic. Let's enhance our function by allowing it to accept inputs, which can alter its behavior. Suppose we want to greet a specific person instead of just saying "Hello World":

```javascript
function greet(name) {
  console.log('Hello ' + name);
}

greet('John'); // Outputs: Hello John
```

Here, `name` acts as a parameter—a variable only accessible within the function. When we call `greet`, we pass 'John' as an argument, which is the actual value supplied to the parameter.

**Function with Multiple Parameters**

Our functions can be designed to accept multiple parameters, separated by commas. Let's add a last name to our greeting:

```javascript
function greet(name, lastName) {
  console.log('Hello ' + name + ' ' + lastName);
}

greet('John'); // Outputs: Hello John undefined
```

Notice that if a value for `lastName` is not provided, JavaScript defaults it to `undefined`. To fix this, we should pass values for both parameters:

```javascript
greet('John', 'Smith'); // Outputs: Hello John Smith
```

**Conclusion**

This session illustrates how functions can be versatile tools in JavaScript. They can be simple or complex, depending on the inputs they are designed to handle. Remember, parameters are specified at the time of function declaration, whereas arguments are the actual values provided during function calls.

The complete code for reference is given below:
```javascript
function greet(name, lastName) {
  console.log('Hello ' + name + ' ' + lastName);
}

greet('John', 'Smith'); // Outputs: Hello John Smith
```

--- 
**Refining Our Code with Template Literals**

Currently, the concatenation in our function looks a bit clunky:

```javascript
// Performing a task
function greet(name, lastName) {
  console.log('Hello ' + name + ' ' + lastName);
}
greet('John', 'Smith');
```

Though effective, this method can lead to somewhat untidy code. Later in this course, we will explore template literals, which will help streamline our syntax. For now, let's focus on understanding the functionality of functions.

**Introduction to Functions that Calculate Values**

While some functions perform tasks, like displaying messages, others are designed to calculate values. Consider a function that calculates the square of a number:

```javascript
// Calculating a value
function square(number) {
  return number * number;
}
```

To use this function, you might initialize a variable with the returned value:

```javascript
// Calculating a value
function square(number) {
  return number * number;
}

let number = square(2);
console.log(number); // Outputs: 4
```

However, if our goal is merely to display the result, we can simplify this by passing the function call directly to `console.log`:

```javascript
console.log(square(2)); // Outputs: 4
```

This approach eliminates the need for a separate variable, streamlining the code.

**Understanding Function Calls**

Now, consider how many function calls are in the following code snippet:

```javascript
// Performing a task
function greet(name, lastName) {
  console.log('Hello ' + name + ' ' + lastName);
}

// Calculating a value
function square(number) {
  return number * number;
}

console.log(square(2));
```

In this example, we actually have two function calls:

1. `square(2)` — This is a call to our `square` function.
2. `console.log(...)` — This is a call to the `log` function of the console object.

Each set of parentheses represents a call to a function. The `log` function can accept various types of arguments, whether a simple string or an expression involving another function call, like `square(2)`.

**Conclusion on Functions**

To encapsulate what we've learned so far: a function in JavaScript is a set of statements designed to perform a specific task or calculate and return a value. In real-world applications, these functions are the building blocks, working together to create the functionality of the entire application. Later in the course, we will delve deeper into the comprehensive world of functions.