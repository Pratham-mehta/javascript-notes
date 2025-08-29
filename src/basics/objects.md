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