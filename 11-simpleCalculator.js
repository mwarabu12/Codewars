/* You are required to create a simple calculator that returns the result of addition, subtraction, multiplication or division of two numbers.
Your function will accept three arguments:
The first and second argument should be numbers.
The third argument should represent a sign indicating the operation to perform on these two numbers.
if the variables are not numbers or the sign does not belong to the list above a message "unknown value" must be returned.
Example:
arguments: 1, 2, "+"
should return 3
arguments: 1, 2, "&"
should return "unknown value" */

function calculator(a, b, sign) {
    const signs = ['+', '-', '*', '/'];
    
    if (typeof a !== 'number' || typeof b !== 'number' || !signs.includes(sign)) {
      return 'unknown value';
    }
  
    if (sign === '+') {
      return a + b;
    } else if (sign === '-') {
      return a - b;
    } else if (sign === '*') {
      return a * b;
    } else if (sign === '/') {
      if (b === 0) {
        return a === 0 ? NaN : (a > 0 ? Infinity : -Infinity);
      }
      return a / b;
    }
  
    return 'unknown value';
  }