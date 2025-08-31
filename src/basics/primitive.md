## Primitive Types

So you have learned how to declare and initialize a variable. Now you might be wondering what are the **kind of values** that we can assign to a variable? Well you have seen strings, but we have more types:

- Basically, in JavaScript we have two categories of types:
  
  - Primitives / Value Types
  
  - Reference Types

In this lecture, we're going to focus on primitives, and you're going to learn about reference types later in the course.

- Now in the category of primitives, we have:
  
  - Strings
  
  - Numbers
  
  - Booleans
  
  - Undefined
  
  - Null

Let's look at each of these in action

```js
let name = 'Pratham'; // String Literal
```

- So here we have a variable called name which is set to a string. What we have here is called a string literal.

- Now let's declare a variable and set it to a number.

```js
let name = 'Pratham';  // String Literal
let age = 25; // Number Literal
```

- So this is what we call a number literal.

- Now let's declare a boolean. A boolean can either have values `true` or `false`.

```js
let name = 'Pratham';  // String Literal
let age = 25; // Number Literal
let isApproved = true; // Boolean Literal
```

- This is what we call a boolean literal. We use this in situations where we want to have some logic. 

- For example, if the order is approved, then, it needs to be shipped. So the value of a boolean variable can be true or false.

- By the way note that both true and false are reserved keywords, so they cannot be variable names.

- Now you have seen `undefined` before, so I can declare another variable, firstName, if we don't initialize it, by default, it's value is `undefined`, but we can also explicitly set this to `undefined` as shown in the code below. (this is not very common)

```js
let name = 'Pratham';  // String Literal
let age = 25; // Number Literal
let isApproved = true; // Boolean Literal
let firstName = undefined; 
```

- In contrast, we have another keyword that is null. So let me declare another variable

```js
let name = 'Pratham';  // String Literal
let age = 25; // Number Literal
let isApproved = true; // Boolean Literal
let firstName = undefined; 
let lastName = null;
```

- We use `null` in situations where we want to explicitly **clear the value of a variable**.

- For example, we may want to present the user with a list of colors. If the user has no selection, you want to set the `selectedColor` variable to `null`.

- In the future, if user selects a color, then we are going to reassign this variable to a color like `red`. And then if they click red again, perhaps we want to remove the selection, so we set this back to `null`.

- we use `null` in situations where we want to clear the value of a variable.

> ## Think of it like this:
> 
> **`undefined`** = "I forgot to put something here"
> - JavaScript automatically gives this to variables you don't set
> - It's like an empty box that you never filled
> 
> **`null`** = "I intentionally put nothing here" 
> - You, the programmer, deliberately set this
> - It's like an empty box that you purposely made empty
> 
> ## Simple Examples:
> 
> ```javascript
> // undefined - you forgot to give it a value
> let firstName;
> console.log(firstName); // undefined (JavaScript says "you didn't give me anything")
> 
> // null - you intentionally clear it
> let selectedColor = null;
> console.log(selectedColor); // null (you said "I want this to be empty for now")
> ```
> 
> ## Real-world analogy:
> - **undefined**: Like a form where you forgot to fill in your middle name - it's blank because you didn't do anything
> - **null**: Like a form where you wrote "N/A" for middle name - you intentionally said "nothing goes here"
> 
> The key difference is **who decided it should be empty**:
> - `undefined` = JavaScript decided (because you didn't set it)
> - `null` = You decided (you explicitly set it to nothing)

These are the examples of primitives and value types. We have strings, numbers, booleans, undefined and null. Now in **ES6** we have another primitive that is **symbol**, and you're going to learn that later in the course.