// CHAPTER NO 6
// Practice exercise 6.1


function addNumbers(num1, num2) {
    return num1 + num2;
  }
  
  let value1 = 4;
  let value2 = 8;
  
  let result1 = addNumbers(value1, value2);
  console.log(`Result of adding ${value1} and ${value2}: ${result1}`);
  
  let value3 = 12;
  let value4 = 18;
  
  let result2 = addNumbers(value3, value4);
  console.log(`Result of adding ${value3} and ${value4}: ${result2}`);


//   Practice exercise 6.2


const adjWords = [
    "awesome", "intelligent", "happy", "creative", "talented", "friendly", "annoying", "amazing"
  ];
  
  function describeName() {
    let username = prompt("Please enter a name:");
  
    let randomIndex = Math.floor(Math.random() * adjWords.length);
    let randomWord = adjWords[randomIndex];
  
    console.log(`The username "${username}" is ${randomWord}!`);
  }
  
  describeName();


//   Practice exercise 6.3


let num1 = 9;
let num2 = 5;

let operator = '+';

function calculate(num1, num2, operator = '+') {
  if (operator === '+') {
    return num1 + num2;
  } else if (operator === '-') {
    return num1 - num2;
  } else {
  
    return num1 + num2;
  }
}

console.log(`Result of ${num1} ${operator} ${num2}: ${calculate(num1, num2, operator)}`);

operator = '-';
console.log(`Result of ${num1} ${operator} ${num2}: ${calculate(num1, num2, operator)}`);

  
  
// Practice exercise 6.4


let myArray = [];

for (let i = 0; i < 10; i++) {
  let value1 = i * 5;
  let value2 = i * i;

  function addValues(num1, num2) {
    return num1 + num2;
  }

  let response = addValues(value1, value2);

  myArray.push(response);
}

console.log(myArray);


// Practice exercise 6.5



let value = '1000';

(function() {
  let value = "200";
  console.log(value);
})();

let result = (function() {
  let value = "Mahwish";
  return value;
})();

console.log (result);

let changeValue = function(newValue) {
  value = newValue;
  console.log(`My name is ${value}`);
};

changeValue("Ayesha");



// Practice exercise 6.6  


function calculateFactorial(num) {
    console.log(num);
    if (num === 0) {
      return 1;
    } else {
      return num * calculateFactorial(num - 1);
    }
  }

  console.log(calculateFactorial(4));
  

//   Practice exercise 6.7


let startValue = 10;

function countdown(value) {
  
  console.log(value);

  if (value > 1) {
    return countdown(value - 1);
  }
}

function countdown2(value) {
  console.log(value);

  if (value > 0) {
    return countdown2(value - 1);
  }
}

console.log("Countdown 1:");
countdown(startValue);

console.log("Countdown 2:");
countdown2(startValue);


// Practice exercise 6.8


let name = function(arg) {
    console.log(arg);
  };
  
  name("Hello!");
  
  function functionName(arg) {
    console.log(arg);
  }
  
  functionName("Welcome to JS");
  

    // Chapter projects
    // Create a recursive function


    function countToTen(start) {
        if (start <= 10) {
          console.log(start);
          countToTen(start + 1);
        }
      }
      
      countToTen(5); 
      countToTen(8); 
      countToTen(11); 


    //   Set timeout order


    const one = ()=> console.log('One');
const two = ()=> console.log('Two');
const three = () =>{
console.log('Three');
one();
two();
}
const four = () =>{
    console.log('Four');
    setTimeout(one,0);
    three();
    }
    four();

      
