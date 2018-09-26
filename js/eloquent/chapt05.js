console.log("============ Eloquent JS, Chpt 5: Higher-Order functions ============");

//Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions.

function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

let labels = [];
repeat(5, i => { labels.push(`Unit ${i + 1}`) } );

console.log(labels);

//function that returns a function :)
function greaterThan(n){
  return num => num > n;
}

let greaterThan5 = greaterThan(5);
console.log(greaterThan5(1));


console.log([1, 2, 3, 4].reduce((a, b) => a + b, 0));

console.log('======================= reduce explained =======================');

var t = [1,2,3,4,5];
var tred;
tred = t.reduce((total,currentValue,currentIndex,arr) =>{
  console.log(total);
  console.log(currentValue);
  console.log(currentIndex);
  console.log(arr);
  return total + currentValue
},4);
console.log(`Result of treduce: ${tred}`);
console.log('======================= reduce explained =======================');

// Two emoji characters, horse and shoe
let horseShoe = "🐴👟";
console.log(horseShoe);
console.log(horseShoe.length);


/*Arrays provide a number of useful higher-order methods.
forEach - to loop over the elements in an array
filter - method returns a new array containing only the elements that pass the predicate function
map - transforming an array by putting each element through a function is done with map
reduce - combine all the elements in an array into a single value
some - method tests whether any element matches a given predicate function
findIndex - finds the position of the first element that matches a predicate*/

console.log("==== Excercise Flattenning ====");

let arrays = [[1, 2, 3], [4, 5], [6]];
let flat = [];
flat = arrays.reduce( (flat, current) => flat.concat(current));

console.log(flat);


console.log("==== Excercise Your Own Loop ====");

loop(3, n => n > 0, n => n - 1, console.log);
loop2(3, n => n > 0, n => n - 1, console.log);

function loop(n,test,update,body){
  do {
    body(n);
    n = update(n);
  } while (test(n));
}

function loop2(n, test, update, body) {
  for (let value = n; test(value); value = update(value)) {
    body(value);
  }
}

console.log("==== Excercise Everything ====");

function every(array, test) {
  for (let i = 0; i < array.length; i++) {
    if(!test(array[i])){
      return false;
    }
  }
  return true;
}

function every2(array,test){
  let result = true;
  if (array.length>0) {
    result = array.map(a => test(a)).reduce( (a,b) => a&&b);
  }
  return result;
}

function every3(array,test){
  let result = true;
  array.forEach(a => {result = result && test(a)});
  return result;
}

function every4(array, test) {
  //a&&b = !(!a || !b)
  return !array.some(element => !test(element));
}

function every5(array, test) {
  for (let element of array) {
    if (!test(element)) return false;
  }
  return true;
}

console.log(every2([1, 3, 5], n => n < 10));
// → true
console.log(every2([2, 16, 4], n => n < 10));
// → false
console.log(every2([], n => n < 10));
// → true


console.log("==== Excercise Dominant writing direction ====");

var s = {
  name: "Adlam",
  ranges: [[125184, 125259], [125264, 125274], [125278, 125280]],
  direction: "rtl",
  year: 1987,
  living: true,
  link: "https://en.wikipedia.org/wiki/Fula_alphabets#Adlam_alphabet"
};

function charCount(script){
  return script.ranges.reduce((total,currVal) =>{
      return total + currVal[1] - currVal[0]
  },0)
}

function charCount2(script){
  return script.ranges.reduce((total,[from,to]) =>{
      return total + to - from
  },0)
}

function charCountPerScript(scriptArr){
  return scriptArr.map(s =>{
    s.nrOfChars = charCount(s);
    return s;
  })
}

console.log(charCount2(s));
console.log(charCountPerScript(SCRIPTS));

function maxChar(scriptArr){
  return scriptArr.reduce( (max, actScript) => {
    return max.nrOfChars>actScript.nrOfChars?max:actScript;
  })
}

function maxCharScript(scriptArr){
  return scriptArr.reduce( (max, actScript) => {
    return max>actScript.nrOfChars?max:actScript.nrOfChars;
  },0)
}

console.log(maxChar(SCRIPTS));

function characterScript(charNum){
  for (let script of SCRIPTS) {
    if(script.ranges.some( a =>{ return charNum>=a[0] && charNum<a[1]}) ){
      return script;
    }
  }

  return 'No script found :('
}

console.log(characterScript('🐴'.codePointAt(0)));
console.log(characterScript('S'.codePointAt(0)));
console.log(characterScript('م'.codePointAt(0)));

function dominantDirection(text){
  let directionCount = {ltr:0,rtl:0,both:0};
  for (let char of text) {
    let actDirection = characterScript(char.codePointAt(0)).direction;
    actDirection ? directionCount[actDirection] ++ : directionCount['both'] ++;
  }
  return directionCount;
}

console.log(dominantDirection("Hey, مساء الخير"));
