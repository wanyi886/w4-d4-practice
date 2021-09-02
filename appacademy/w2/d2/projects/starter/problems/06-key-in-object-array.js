/***********************************************************************
Write a function `keyInObjectArray(objArray, keyString)` that takes in an array
of objects as the first parameter and a string as the second. The
`keyInObjectArray` function will return `true` if any of the objects contains
the `keyString` as a key within them, and `false` if not.


Examples:
let objArray = [
  { name: "Rupert" },
  { age: 42 },
  { planet: "Earth", system: "Milky Way" }
];

keyInObjectArray(objArray, 'planet'); // => true
keyInObjectArray(objArray, 'age'); // => true
keyInObjectArray(objArray, 'food'); // => false
keyInObjectArray(objArray, 'animal'); // => false

***********************************************************************/

let objArray = [
  { name: "Rupert" },
  { age: 42 },
  { planet: "Earth", system: "Milky Way" }
];

function keyInObjectArray(objArray, keyString) {
  // your code here
  for (let i = 0; i < objArray.length; i++){
    let obj = objArray[i];

    for (let key in obj){

      if (keyString === key){
        return true;
      }
    }
  }
  return false;
}



// console.log(objArray[1]);

console.log(keyInObjectArray(objArray, 'planet')); // => true
console.log(keyInObjectArray(objArray, 'age')); // => true
console.log(keyInObjectArray(objArray, 'food')); // => false
console.log(keyInObjectArray(objArray, 'animal')); // => false

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = keyInObjectArray;
