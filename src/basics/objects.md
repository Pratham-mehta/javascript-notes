## Objects

#### Overview

In JavaScript, there are two main types of data: primitive types and reference types. This lecture focuses on reference types, which include :

- objects, 

- arrays, and 

- functions.

#### Objects in JavaScript

- **Definition**: An object in JavaScript is a collection of related data and functions. Objects can be compared to **real-life objects** with properties. For example, a person can have properties like name, age, and address.
- **Purpose**: Objects help organize **multiple related variables** into a single entity, making the code cleaner and more manageable.

> When you are dealing with **multiple related variables**, we can put these variables inside of an object.

#### Declaring an Object

- **Syntax**: To declare an object, we use the following syntax:
  
  ```javascript
  let person = {
    name: 'Pratham',
    age: 25
  };
  ```

- **Components**: The object literal syntax involves curly braces `{}` containing key-value pairs. Each key (property) is followed by a colon `:` and its value, separated by commas.
  
  - Example:
    
    ```javascript
    let person = {
      name: 'Pratham',
      age: 25
    };
    ```

Now what if I want to change the name of this person (object), see the upcoming section where we try to access the properties of the object and try to read or modify it.

#### Accessing Object Properties

- **Dot Notation**: The dot notation is concise and is the default choice for accessing and modifying object properties.
  
  ```javascript
  let person = {
    name: 'Pratham',
    age: 25
  };
  
  // Dot Notation
  person.name = 'John'; // Modifies the name property
  console.log(person.name); // Logs 'John' to the console
  ```

- **Bracket Notation**: The bracket notation is used when the property name is not known <mark>until runtime</mark>. It allows **dynamic access** to properties using a string variable.
  
  ```javascript
  let person = {
    name: 'Pratham',
    age: 25
  };
  
  // Bracket Notation
  person['name'] = 'Mary'; // Modifies the name property
  console.log(person['name']); // Logs 'Mary' to the console
  ```

#### Choosing Between Dot and Bracket Notation

- **Dot Notation**: Preferred for its conciseness and simplicity. (easier for programmers)
  
  - Example:
    
    ```javascript
    person.name = 'John';
    ```

- **Bracket Notation**: Useful when the property name is determined dynamically at runtime. Meaning that in scenarios like we don't know the target property until the runtime, for example in our user interface, the user might be selecting the name of the target property. In that case, in the time of writing code, we don't know what property we are going to access (that is going to be selected at the runtime by the user, the properties). So we might have another variable somewhere else which determines the name of target property that the user is selecting and that can change at runtime. That is where **bracket notation** would be preferred.
  
  - Example:
    
    ```javascript
    let selection = 'name';
    person[selection] = 'Mary';
    console.log(person[selection]); // Logs 'Mary'
    ```

#### Summary

- **Object Declaration**: Use object literals with key-value pairs inside curly braces.
- **Accessing Properties**: Prefer dot notation for simplicity; use bracket notation for dynamic property access.

In the next lecture, we will explore arrays and functions, which are also part of the reference types in JavaScript.

<u>**Only read this section below if you are coding in Python as well and have time for pleasure read to understand the difference**</u>

> ### Python Dictionaries vs JavaScript Objects
> 
> Think of both JavaScript objects and Python dictionaries like boxes where you store things with labels. They're pretty similar, but each language has its own style.
> 
> **JavaScript Objects - The Flexible Friend**
> 
> In JavaScript, you create them like this:
> ```javascript
> let person = {
>   name: "Sarah",
>   age: 25,
>   city: "New York"
> }
> ```
> 
> The cool thing about JavaScript objects is you can grab values in two ways:
> - `person.name` (the dot way - simple and clean)
> - `person["name"]` (the bracket way - useful for tricky names)
> 
> **Python Dictionaries - The Consistent Companion**
> 
> Python does it like this:
> ```python
> person = {
>   "name": "Sarah",
>   "age": 25,
>   "city": "New York"
> }
> ```
> 
> With Python, you only have one way to get values:
> - `person["name"]` (always brackets, no exceptions)
> 
> **The Big Differences**
> 
> **Keys (the labels on your boxes):**
> - JavaScript is picky - only text labels allowed
> - Python is generous - you can use text, numbers, even more complex things as labels (you will understand the difference down below with an example illustrated)
> 
> **Getting your stuff out:**
> - JavaScript: Two ways (dot or brackets)
> - Python: One way (just brackets)
>
>Over here you will understand the difference for the **keys (labels)**
> **JavaScript - The Picky One**
> 
> In JavaScript, even if you try to use numbers as keys, they secretly get turned into text:
> 
> ```javascript
> let jsObject = {
>   1: "first",
>   2: "second",
>   "hello": "world"
> }
> 
> console.log(typeof Object.keys(jsObject)[0])  // "string" - not a number!
> // JavaScript converted that 1 into "1" behind the scenes
> ```
> 
> **Python - The Generous One**
> 
> Python lets you use all sorts of things as keys:
> 
> ```python
> # Numbers as keys? Sure!
> my_dict = {
>     1: "first",
>     2: "second",
>     3.14: "pi"
> }
> 
> # Mix of different types? No problem!
> mixed_dict = {
>     "name": "Alice",           # string key
>     42: "answer",              # number key
>     (1, 2): "coordinates",     # tuple key
>     True: "boolean key"        # boolean key
> }
> 
> # You can even use tuples for complex keys
> student_grades = {
>     ("John", "Math"): 95,
>     ("John", "Science"): 87,
>     ("Mary", "Math"): 92
> }
> ```
> 
> **The Real Difference in Action**
> 
> Let's say you want to track scores by player number:
> 
> ```javascript
> // JavaScript - numbers become strings automatically
> let scores = {
>   1: 100,
>   2: 85
> }
> console.log(scores[1])    // Works: 100
> console.log(scores["1"])  // Also works: 100 (same thing!)
> ```
> 
> ```python
> # Python - numbers stay as numbers
> scores = {
>     1: 100,      # integer key
>     "1": 85      # string key - totally different!
> }
> print(scores[1])    # 100
> print(scores["1"])  # 85 - these are completely different keys!
> ```
> 
> See the difference? JavaScript treats `1` and `"1"` as the same key, but Python sees them as completely different keys. That's what I meant by Python being more generous - it gives you more control over exactly what type of key you want to use!