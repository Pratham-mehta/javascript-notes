## Ternary Operator in JavaScript

The ternary operator, also known as the conditional operator, is a concise way to perform conditional assignments. It is often used to replace simple `if-else` statements.

#### Syntax

The syntax for the ternary operator is:

```javascript
condition ? expressionIfTrue : expressionIfFalse
```

#### Example Scenario

Let's implement a rule where if a customer has more than 100 points, they are considered a 'gold' customer; otherwise, they are a 'silver' customer.

#### Step-by-Step Explanation

1. **Declare a Variable to Track Points**
   
   ```javascript
   let points = 110;
   ```

2. **Declare a Variable to Represent Customer Type**
   
   ```javascript
   let type;
   ```

3. **Use the Ternary Operator**
   
   - **Condition**: `points > 100`
   
   - **If True**: Assign `'gold'` to `type`
   
   - **If False**: Assign `'silver'` to `type`
     
     ```javascript
     let type = points > 100 ? 'gold' : 'silver';
     ```

4. **Log the Result**
   
   ```javascript
   console.log(type); // Output: 'gold'
   ```

### Example Code

Here's the complete code the instructor used to explain:

```javascript
// If a customer has more than 100 points
// they are a 'gold' customer, otherwise,
// they are a 'silver' customer.

let points = 90;
let type = points > 100 ? 'gold' : 'silver';

console.log(type); // Output: 'silver'
```

### Explanation

1. **Condition**: `points > 100`
   
   - This checks if the `points` variable is greater than 100.
   - This expression evaluates to a boolean (`true` or `false`).

2. **Question Mark (`?`)**
   
   - If the condition is `true`, the value after the `?` is assigned to the variable `type`.
   - In this case, if `points` is greater than 100, `type` is assigned the value `'gold'`.

3. **Colon (`:`)**
   
   - If the condition is `false`, the value after the `:` is assigned to the variable `type`.
   - In this case, if `points` is not greater than 100, `type` is assigned the value `'silver'`.

### Testing Different Values

- **For `points = 110`**
  
  ```javascript
  let points = 110;
  let type = points > 100 ? 'gold' : 'silver';
  
  console.log(type); // Output: 'gold'
  ```

- **For `points = 90`**
  
  ```javascript
  let points = 90;
  let type = points > 100 ? 'gold' : 'silver';
  
  console.log(type); // Output: 'silver'
  ```

### Summary

The ternary operator is a shorthand way to perform conditional assignments. It starts with a condition and evaluates to one of two values based on whether the condition is true or false. It's a powerful tool for making your code more concise and readable.

- **Syntax**: `condition ? expressionIfTrue : expressionIfFalse`

- **Example**:
  
  ```javascript
  let points = 90;
  let type = points > 100 ? 'gold' : 'silver';
  console.log(type); // Output: 'silver'
  ```

Understanding and using the ternary operator can help simplify your code and make conditional assignments more straightforward.

---