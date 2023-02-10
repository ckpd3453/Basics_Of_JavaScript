// 1) Spread-Operators
//Example - i
const cars1 = ["Saab", "Volvo", "BMW"];
const cars2 = ["Saab", "Volvo", ...["Nano", "Safari", "Harrier", "Altroz"]];

console.log(cars1);
console.log(cars2);

//Example -ii
const num = [5, 7, 1, 9, 4, 6];
const maxNum = Math.max(...num);
console.log(maxNum);

// 2) The For/Of Loop
let a;
for (a of num) {
  console.log("for loop : ", a + a);
}

// 3) Map
const veg = new Map([
  ["Potato", 1],
  ["Tomato", 2],
  ["Onion", 3],
]);
veg.set("Carrot", 5); //Map.set()
console.log(veg.get("Carrot"));

// 4) Set
const animals = new Set();
animals.add("Tiger");
animals.add("Cow");
animals.add("Cat");
animals.add("Dog");

console.log(animals, animals.size);

/* JavaScript Classes
 * JavaScript Classes are templates for JavaScript Objects.
 * Use the keyword class to create a class.
 * Always add a method named constructor():*/

class Abc {
  constructor(name, milage) {
    this.name = name;
    this.milage = milage;
  }
}

const car1 = new Abc("Altroz", 17);
const car2 = new Abc("Creta", 16);
console.log(car1, car2);

// Function Rest Parameter
// The rest parameter (...) allows a function to treat an indefinite number of arguments as an array.
function sum(...args) {
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}

let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
console.log("Sum : ", x);

//String.startsWith()
// The startsWith() method returns true if a string begins with a specified value, otherwise false
let text = "Hello world, welcome to the universe.";

console.log(text.startsWith("Hello"));
console.log(text.endsWith("universe."));
console.log(text.includes("world"));

const arr = Array.from("ABCDEFG");
console.log(arr);
