console.log("============ Eloquent JS, Chpt 1: Values, Types, And Operators ============");
var backtick = `Backtick-quoted strings, usually called template literals, can do a few more tricks:
The half ot 100 is ${100/2}.`;

console.log(backtick);

/*
BINARY vs. UNARY operators
The other operators shown all operated on two values,
but typeof takes only one.
Operators that use two values are called binary operators,
while those that take one are called unary operators.
The minus operator can be used both as a binary operator and as a unary operator.
One extra: TERNARY operator, e.g. conditional operator, instead of IF
*/
console.log(true?2:3);

console.log(NaN==NaN); // false: the result of a nonsensical computation doesn't equal to the result of any other nonsensical computations

//type coercion
//When an operator is applied to the “wrong” type of value, JavaScript will quietly convert that value to the type it needs
console.log(8 * null)
// → 0
console.log("5" - 1)
// → 4
console.log("5" + 1)
// → 51
console.log("5" * 2)
// → 10
console.log("5" * 2)
// → NaN
console.log(false == 0)
// → true

console.log(null || "user")
// → user
console.log("Agnes" || "user")
// → Agnes
