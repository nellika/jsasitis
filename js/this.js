console.log(this); //Window
//this = owner of the function
//function scope = each function creates a new scope
//block scope: e.g. in a loop, keyword let
//let: no redeclaration, var: it can be :)

$(function(){
    console.log('========== THIS ==========');
    console.log(this); //document
    var cica = {
      nev: 'Cirmos',
      kor: 1,
      dorombol: function(){
        console.log(this);
        console.log( this.nev + ' dorombol...');
      }
    }

    cica.dorombol();

    var obj = {name: 'add', descr:'This functions sums some numbers: '};

    function add(n1,n2){
      let sum=n1+n2;
      console.log(this.descr + sum);
    }

    add.call(obj,42,18); //explicit function binding, C for commas
    add.apply(obj,[42,18]); //explicit function binding, A for Array

    console.log('========== FUNCTION, CLOSURE ==========');
    //hoisting: JS moves all the (functioin + variable) declarations to the top of the current scope=> functions can be called before their declaration

    var x = function(a){ return 2+a}; //anonymous function, without a name :(
    console.log(x(3));
});

function fun(){
  console.log(this);
  return this;
}

fun(); //Window

function funStrict(){
  'use strict';
  console.log(this);
  return this;
}

funStrict(); //undefined
