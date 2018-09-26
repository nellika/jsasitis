console.log("============ Eloquent JS, Chpt 3: Functions ============");

const squareInTheFlow = function(x){
  //this cannot be used before its declaration
  return x*x;
}

function squareHoisting(x){
  //this can be called before/after its declaration
  return x*x;
}

const squareArrow = (x) => {return x*x};
const squareArrowSimple = x => x*x; //no need for parantheses (only one parameter) and braces (only 1 expression that will be returned)
const squareArrowWithoutParameter = () => x*x;

//too much recursion :D
function chicken() {
  return egg();
}
function egg() {
  return chicken();
}
//console.log(chicken() + " came first.");
// → ??

//optional parameter with default value
function power(base, exponent = 2){
  let result =1;
  for (let i = 1; i <= exponent; i++) {
    result *= base;
  }
  return result;
}

console.log(power(4)); //16
console.log(power(4,3)); //64


//closure > NOTE! come back here...
function multiplier(factor){
  return number => number * factor;
}

let twice = multiplier(2);
console.log(twice(5));

//recursion
var result = 1;
function factorial(n){
  if (n>1) {
    return(n * factorial(n-1));
  }else{
    return 1;
  }

}

console.log(factorial(5));

console.log('==== Fibonacci recursive ====');
const fibo = (prev, curr) =>{
  if (prev<30) {
    console.log(curr);
    return fibo(curr, curr + prev);
  }

}

const fibo2 = num =>{
  if (num <= 1) return 1;
  return fibo2(num - 1) + fibo2(num - 2);
}

fibo(0,1);
console.log(fibo2(5));

console.log('==== Add 7 or multiple by 2 ====');

function findSolution(target){
  function find(current, history){
    if (current == target) {
      return history;
    }else if (current>target) {
      return null;
    }else {
      return find(current + 7, `(${history} + 7)`) ||
             find(current * 2, `(${history} * 2)`);
    }
  }
  return `${target} = ` + find(0,'0');
};

console.log(findSolution(21));

//Writing functions :)
// Define f to hold a function value
const f = function(a) {
  console.log(a + 2);
};

// Declare g to be a function
function g(a, b) {
  return a * b * 3.5;
}

// A less verbose function value
let h = a => a % 3;

console.log("==== Excercise minimum ====");

const minimum = (x,y) =>{
  let m;
  x>y?m=y:m=x;
  return m;
}

function min2(a, b) {
  if (a < b) return a;
  else return b;
}

console.log(minimum(5,10));

console.log("==== Excercise recursive odd/even ====");

function isEven(n){

  if(n<0){
    n = Math.abs(n);
  }

  if (n==0) {
    return true;
  }else if (n==1) {
    return false;
  }else {
    return isEven(n-2);
  }
}

console.log(isEven(-10));

function countChar(str,chr){
  var result = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == chr) {
      result ++;
    }
  }
  return result;
}

console.log(countChar('BBC','B'));
console.log(countChar('kakkerlak','k'));
