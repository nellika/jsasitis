console.log("============ Eloquent JS, Chpt 4: Data Structures: objects and arrays ============");

let sequence = [1,2,3,4];

sequence.push(5);
console.log(sequence);
sequence.pop();
console.log(sequence);

let cica = {
  nev : "Cirmi",
  szin: "cirmos",
  nyakorv : "kék"
}
console.log(cica);

delete cica.nyakorv;
console.log(cica);

console.log('nyakorv' in cica);
console.log('nev' in cica);
console.log(Object.keys(cica));

Object.assign(cica, {szin: "fekete", nyakorv:"pink"});
console.log(cica);

//Mutability of objects:

  //there is a difference between having two references to the same object
  //and having two different objects that contain the same properties
let oAlma = {alma: true};
let oKorte = oAlma;
let oMas = {alma: true};

console.log(oAlma == oMas);
console.log(oAlma == oKorte);


//add objects to an object array
let ebedNaplo = [];

function addEbed(fogasok, joVolt){
  ebedNaplo.push({fogasok, joVolt});
}

addEbed(['Leves','Csirke','Málna'], true);
addEbed(['Leves','Rizs','Süti'], true);

console.log(ebedNaplo);

//copy an array, not only reference
let arr1 = [2,3,4];
let arr2 = [...arr1];
let arr3 = arr1.slice(0);

arr1.push(12);
arr2.push(5);
arr3.pop();

console.log(arr1);
console.log(arr2);
console.log(arr3);

function arrayLoop (arr){
  for (let elem of arr) {
    console.log(elem);
  }
}

arrayLoop(arr3);

console.log("==== Excercise The Sum of a Range ====");

console.log(sum(range(1,10,2)));

function range(s,e,step = 1){
  let r = [];

  for (let i = s; i <= e; i+=step) {
    r.push(i);
  }
  return r;
}

function range2(start, end, step = start < end ? 1 : -1) {
  let array = [];

  if (step > 0) {
    for (let i = start; i <= end; i += step) array.push(i);
  } else {
    for (let i = start; i >= end; i += step) array.push(i);
  }
  return array;
}

function sum(arr){
  let r = 0;
  for (n of arr) {
    r+=n;
  }
  return r;
}

console.log("==== Excercise Reversing an Array ====");

console.log(reverseArray(['a','b','c']));

function reverseArray(arr){
  let reversedArray = [];
  for (elem of arr) {
    reversedArray.unshift(elem);
  }

  return reversedArray;
}

let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);

function reverseArrayInPlace(arr){
  let temp;
  for (var i = 0; i < arr.length/2; i++) {
    temp = arr[i];
    arr[i] = arr[arr.length-i-1];
    arr[arr.length-i-1] = temp;
  }

  return arr;
}

console.log("==== Excercise A List ====");

console.log(arrayToList([10, 20, 30, 40]));

function arrayToList(arr){
  let list = null;
  for (var i = arr.length-1; i >= 0; i--) {
    list = {value: arr[i], rest: list};
  }
  return list;
}

console.log(listToArray(arrayToList([10, 20, 30])))

function listToArray(list, r = []){
  r.push(list.value)
  if (list.rest != null) {
    return listToArray(list.rest, r);
  }else {
    return r;
  }
}

console.log(prepend(10, prepend(20, null)));

function prepend(v, list){
  let l = {};
  l.value = v;
  l.rest = list;
  return l;
}

console.log(nth(arrayToList([10, 20, 30]), 1));

function nth(list,n) {
  if (n>0) {
    return nth(list.rest,n-1);
  }
  return list.value;
}


console.log("==== Excercise Deep Comparison ====");

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));

function deepEqual(o1,o2){
  if (o1 != null && o2 != null && typeof o1 === 'object' && typeof o2 === 'object') {
      var o1Keyz = Object.keys(o1);
      var o2Keyz = Object.keys(o2);
      if(o1Keyz.length == o2Keyz.length){
        for (k of o1Keyz) {
          return deepEqual(o1[k],o2[k])
        }
      }else {
        return false;
      }
  }else{
    return o1 === o2;
  }
}
