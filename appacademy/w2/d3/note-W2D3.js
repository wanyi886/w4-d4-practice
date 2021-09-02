// Fistclass function definition

// 1. stored in a variable
// 2. Passed as an argument to a function
// 3. returned from a function

//  function HOF(){
//    return function(){
//      console.log("I an being returned from a function")
//    }
//  }
//  HOF()()  // => reason we need to double invoke it is that we didn't pass an argument
//  // we need to invoke twice to invoke the inner function

// A callback is always a function. In general, the callback is the function that is being passed
//into the other function

// Named callback
/* let foobar = function(callback) {
  console.log("foo");
  callback();
  console.log("bar");
};

let sayHello = function() {
  console.log("hello");
};

foobar(sayHello); // prints
// foo
// hello
// bar
*/

// Anonymous callback

/*
let foobar = function(callback) {
  console.log("foo");
  callback();
  console.log("bar");
};

foobar(function() {
  console.log("hello");
}); // prints
// foo
// hello
// bar

*/



// Higher order function with function argument

// function foo(someArg){
//   console.log(someArg);
// }

// function bar(){
//   return "I'm a function!";
// }
// foo is a higher order function
// bar is a callback


// Higher order function with function return value

// function foo() {
//   function bar(){
//     return "I'm a function!";
//   }
//   return bar;
// }

// foo is a higher order function


// First class objects can be passed as arguments as arguments into a function
// Ex. boolean, number, string
// functions are first class object
// This means functions can be passed as arguments into funcitons

//----------------------------

// Callbacks

// Problem 1

// create a function that can do 3 calculation
    // add
    // multiply
    // exponent

// let math = function (num1, num2, cb){
//   let res = cb(num1, num2);
//   return res;
// }

// let add = function (num1, num2){
//   return num1 + num2;
// }

// console.log(math(4, 5, add)); // 9

// let multiply = function(num1, num2){
//   return num1 * num2;
// };

// console.log(math(2, 6, multiply)); // 12

// let exponent = function(num1, num2){
//   return num1 ** num2;
// }

// console.log(math(2, 3, exponent));



// cb in the first because its a parameter in the ffirst function @Wan-Yi
// Isaac Pak to Everyone (9:27 AM)
// it's a parameter that takes a callback function as an argument
// Yanelys Mena to Everyone (9:27 AM)
// Kevins walkthrough really helped me understand this yesterday. He wrote it out like Eric did. It’s the same, just backwards order.
// Kyle Huang to Everyone (9:27 AM)
// We need cb because we are inputing either pointsFor or pointsAgainst
// Those are both callback functions

// ------------------------------------------------------------------------------------------

// Multiple callback

// Write a function, greaterResult, that accepts a number and two callbacks as arguments
// The function should call both callbacks, passing in the number, and return
// the result of the callback that is larger

// let greaterResult = function(num, cb1, cb2){
//   let res1 = cb1(num);
//   let res2 = cb2(num);

//   if (res1 > res2){
//     return res1;
//   } else {
//     return res2;
//   }
// }

// let doubler = function(n){
//   return n * 2;
// }

// let squarer = function(n){
//   return n * n;
// }

// console.log(greaterResult(5, doubler, squarer)); // 25
// console.log(greaterResult(1, doubler, squarer)); // 2

//Example 2

/*
    I want to write a function sentenceMaker() that intakes an array of words and 2 callbacks.
    It will return the array turned into a sentence with every other word using the
    opposite callback.

    2 callbacks -
        1. adds "woooo" to the end of the word - if the index is even
        2. only returns the first 2 letters of the word - if the index is odd
    */

// let sentenceMaker = function (words, cb1, cb2){
//   let result = words.map(function(word, i){
//     if (i % 2 === 0) return cb1(word);
//     else return cb2(word);
//   })
//   return result.join(" ");
// }

// let woooo = function(word){
//   return word + "woooo";
// }

// let firstTwo = function(word){
//   return word.slice(0, 2)
// }

// let words = ["One", "Ring", "To", "Rule", "Them", "All"];
// console.log(sentenceMaker(words, woooo, firstTwo)); // Onewoooo Ri Towoooo Ru Themwoooo Al


// My.forEach()

let people = ["Jeff", "Schuler", "Bill", "Adam", "Hector"];

// Regular For Each Loop
people.forEach(function(ele, i, arr){
  console.log(ele + " is at idx " + i);
});

// Custome For Each Loop

let myForEach = function(arr, cb){
  for (let i = 0; i < arr.length; i++){
    let ele = arr[i];
    cb(ele, i, arr);
  }
}

let func = function(ele, i, arr){
  console.log(ele + " is at idx " + i);
}

myForEach(people, func);
