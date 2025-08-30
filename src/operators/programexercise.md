#### Programming Execise 1 - Swapping Variables

- Write a program to swap the values of the variables, like from red to blue, the sample code is given below:

```javascript
let a = red;
let b = blue;
console.log(a);
console.log(b);
```

- Write some code here to swap the value of these two variables. So when we log these on the console, instead of getting red and blue, we're going to get blue and red.

**Solution**:

```javascript
let a = red;
let b = blue;
let temp;
// before swapping
console.log(a);
console.log(b);
temp = a;
a = b;
b = temp;
// after swapping
console.log(a);
console.log(b);
```

so the logic behind here is about to create a temporary container, and storing the variable value which helps in swapping. So value of `a` is stored first for temporarily in `temp` variable and after assigning the value of `b` to `a`, the value of `temp` variable is assigned to `b`.

---