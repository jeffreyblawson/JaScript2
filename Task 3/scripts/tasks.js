/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2

// Step 2: In the function, return the sum of the parameters number1 and number2

// Step 3: Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function

// Step 4: Assign the return value to an HTML form element with an ID of sum

// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function
function add(number1, number2) {
  return number1 + number2;
}

function addNumbers() {
  let number1 = document.getElementById("addend1").value;
  let number2 = document.getElementById("addend2").value;
  let sum = add(number1, number2);
  document.getElementById("sum").innerHTML = "<p>The sum is <p> " + sum;
}
document.getElementById("addNumbers").addEventListener("click", addNumbers());

// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers
function sub(number1, number2) {
  let difference = number1 - number2;
  document.getElementById("difference").innerHTML = sum;
  document.querySelector(
    "#subractNumbers".addEventListener("click", subtractNumbers())
  );
  return difference;
}

function subtractNumbers() {
  let number1 = document.querySelector("#minuend").value;
  let number2 = document.querySelector("#subtrahend").value;
  sub(number1, number2);
  document.getElementById("sum").innerHTML = "<p>The sum is <p> " + sum;
}
// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers
function multiply(number1, number2) {
  let product = number1 + number2;
  document.getElementById("product").innerHTML = sum;
  document.querySelector(
    "#multiplyNumbers".addEventListener("click", multiplyNumbers())
  );
  return product;
}

function multiplyNumbers() {
  let number1 = document.querySelector("#factor1").value;
  let number2 = document.querySelector("#factor2").value;
  multiply(number1, number2);
}
// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers
function divide(number1, number2) {
  let quotient = number1 / number2;
  document.getElementById("quotient").innerHTML = quotient;
  document.querySelector(
    "#quotient".addEventListener("click", divideNumbers())
  );
  document.getElementById("quotient").innerHTML = quotient;
  return quotient;
}

function divideNumbers() {
  let number1 = document.querySelector("#dividend").value;
  let number2 = document.querySelector("#divisor").value;
  divide(number1, number2);
}
// Step 9: Test all of the mathematical functionality of the task3.html page.

/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date

// Step 2: Declare a variable to hold the current year

// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2

// Step 4: Assign the current year variable to an HTML form element with an ID of year

/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25

// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"

// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )

// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"

// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"

// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"

// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"
