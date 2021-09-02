/***********************************************************************
Write a function `stringConverter(string)` that will intake a
string as an argument and returns an object representing the count of each
character in the string. **Hint:** don't forget you can check if a key is present
in an object by using `obj[key] === undefined`.

Examples:

console.log(stringConverter("apple")); // => {a: 1, p: 2, l: 1, e: 1}
console.log(stringConverter("banana")); // => {b: 1, a: 3, n: 2}
console.log(stringConverter("raccoon")); // => {r: 1, a: 1, c: 2, o: 2, n: 1}
***********************************************************************/

// split the string to an array
// set up an empty obj
// walk through the array to check the char
// if char does not present in the obj
  // add char and value 1 to the obj
// if char is in the obj
  // add 1 to value


function stringConverter(string) {
  // your code here
  let strArr = string.split('');
  let obj = {};

  for (let i = 0; i < strArr.length; i++){
    let char = strArr[i];
    if (obj[char] === undefined){
      obj[char] = 1;
    } else {
      obj[char]++;
    }
  }
  return obj;
}
console.log(stringConverter("apple")); // => {a: 1, p: 2, l: 1, e: 1}
console.log(stringConverter("banana")); // => {b: 1, a: 3, n: 2}
console.log(stringConverter("raccoon")); // => {r: 1, a: 1, c: 2, o: 2, n: 1}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = stringConverter;
