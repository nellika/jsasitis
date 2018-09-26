console.log("============ Eloquent JS, Chpt 2: Program structure ============");

//Looping a triangle
console.log('==== Looping a triangle ====');

const pillow='#';
var pillows='';
for (let i = 0; i < 7; i++) {
  pillows +=pillow;
  console.log(pillows);
}

for (var i = '#'; i.length < 8; i+='#') {
  console.log(i);
}

//FizzBuzz
console.log('==== FizzBuzz ====');

for (let i = 1; i <= 100; i++) {
  var fizzBuzz = '';
  const fizz = 'Fizz';
  const buzz = 'Buzz';

  if (i%3==0) {
      fizzBuzz = fizz;
  }

  if (i%5==0) {
    fizzBuzz += buzz;
  }

  if (fizzBuzz == '') {
    fizzBuzz = i;
  }

  console.log(fizzBuzz);
}

for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0) output += "Fizz";
  if (n % 5 == 0) output += "Buzz";
  console.log(output || n);
}


console.log('==== ChessBoard ====');

var size = 16;
var firstRow = '';
var board = '';
//creating first line
for (let i = 0; i < size; i++) {
  i%2?firstRow+=' ':firstRow+=pillow;
}

for (let i = 0; i < size; i++) {
  if (i%2==0) {
    board += firstRow.substr(1) + pillow + '\n';
  }else {
    board += firstRow + '\n';
  }
}

console.log(board);

//classic loop in the loop concept
var size2 = 8;
var board2 = '';

for (let i = 0; i < size2; i++) {
  for (let j = 0; j < size2; j++) {
    if((i+j)%2 == 0){
      field = pillow;
    }else {
      field = ' ';
    }
    board2 += field;
  }
  board2 += '\n';
}

console.log(board2);
