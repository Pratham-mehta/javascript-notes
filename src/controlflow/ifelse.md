# Control Flow in JavaScript

## If...else statement

**Overview**

- In the last section you learned about expressions and operators. In this section we're going to use these expressions and operators along with conditional statements to implement interactivity in our applications.
  
- In JavaScript we have two types of conditional statements, we have:
  
  - if and else
    
  - switch and case
    
- You're going to learn about if and else in this lecture, and we'll look at switch and case in the next lecture.
  

---

- **Problem Description:**
  
  Imagine in our application we're going to get the current hour and depending on it's value, we're going to greet the user with a different message. So if the hour is between let's say <u>6am and 12pm</u>, you will display something like <u>good morning</u>. Similarly, if it is between <u>12pm and 6pm</u> we're going to display <u>good afternoon</u>. Otherwise we're going to display <u>good evening</u>.
  

```javascript
// get hour from the user
// if it is between 12 pm and 6 pm : Good morning!
// if it is between 12 pm and 6 pm : Good afternoon !
// Otherwise : Good evening !
```

**Solution:**

- To have some logic like this in our application, we use if and else.
  

##### if Statement

- Syntax
  

```javascript
// for multiple statements (put curly braces)
if (condition){
    //statements
}

// for single statement 
if (condition)
    //statements
```

- We start with the `if`, then we add <u>parenthesis</u>. And in between these parenthesis, we add a condition. If this condition evaluates to true, the statement we put after will be executed.
  
- Now if you have multiple statements, we need to put them in between these curly
  
  braces. We refer to these as a block of code.
  

#### else if Statement

- Syntax
  

```javascript
else if (anotherCondition){
    // statements
}
else if (yetanotherCondition){
    // statements
}
```

- It is used for additional conditions (if it is required)
  
- if the primary condition turns out to be false, it jumps to `else if` condition, and if the additional condition is true, then the statement is executed.
  
- we could have multiple `else if` conditions as we want, there is no limitation based on the problem statement. If optionally none of the conditions are set to be true, we could use `else`.
  

Now what if everything turns out to be false, you might either want to execute some set of instructions, when everything turns out to be false, for that we use `else` logic

#### else statement

- Syntax
  

```javascript
else {
    // statements
}
```

- It is used when none of the previous conditions are true.
  

The whole if...else structure looks like this:

```javascript
if (condition){
    //statements
}

else if (anotherCondition){
    // statements
}
else if (yetanotherCondition){
    // statements
}
else {
    // statements
}
```

- Now we want to get this logic and map it into this structure. So let's start with conditions given based on problem statement
  

```javascript
// get hour from the user
// if it is between 6 am and 12 pm : Good morning!
// if it is between 12 pm and 6 pm : Good afternoon !
// Otherwise : Good evening !

let hour = 10;
if (hour>=6 && hour<12){
    console.log("Good Morning !");
}
else if (hour>=12 && hour<18){
    console.log("Good Afternoon");
}
else{
    console.log("Good Evening");
}
```

**Explanation:**

• **Condition 1**: if (hour >= 6 && hour < 12)

• Checks if the hour is between 6 AM and 12 PM.

• If true, it logs “Good morning.”

• **Condition 2**: else if (hour >= 12 && hour < 18)

• Checks if the hour is between 12 PM and 6 PM.

• If true, it logs “Good afternoon.”

• **Default Case**: else

• If none of the above conditions are true, it logs “Good evening.”

---