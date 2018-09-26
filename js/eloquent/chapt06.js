console.log("============ Eloquent JS, Chpt 6: The Secret Life of Objects ============");

let bigCat = {size: 'big', sound:'meoooooow', makeSound};
let smallCat = {size: 'small', sound:'meeeow', makeSound};

function makeSound(){
  console.log(this.sound);
}

function writeSize(){
  console.log(this.size);
}

bigCat.makeSound();
writeSize.call(bigCat);

let empty = {};
console.log(empty.toString);
// → function toString(){…}
console.log(empty.toString());
// → [object Object]

let protoCat = {
  getSound(){
    return this.sound
  }
};

let tinyCat = Object.create(protoCat);
tinyCat.size = 'tiny';
tinyCat.sound = 'meow';
console.log(`${tinyCat.size} has the following sound: ${tinyCat.getSound()}`);

function Animal(type){
  this.type = type;
}

Animal.prototype = {
  legs:4,
  speak: sound=>`${this.type} says ${this.sound}`
}

let rabbit = new Animal('Rabbit');
console.log(rabbit);
