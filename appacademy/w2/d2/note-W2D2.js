//object
// key points to a value

// let obj = {
//   name: "WanYi",
//   age: 32,
//   favoriteTrilogy: {
//     name: "Prequel Trilogy",
//     faovoriteCharacter: "Mace Windu",
//     fovoriteLine: "I am the senate!"
//   }
// }

// access the age
// console.log(obj["age"]); // "" : quote

// // acess mu favoriteLine
// console.log(obj["favoriteTrilogy"]["favoriteLine"]);
// console.log(obj["favoriteTrilogy"].favoriteLine); // it works, but sometimes it doesn't
// console.log(obj.favoriteTrilogy.favoriteLine);
// // if we use a key start from a number, we cannot use dot notation

// //change my name
// obj.name = "Jeff";
// console.log(obj.name); // Jeff

// obj['name'] = "Dylan";
// console.log(obj.name); // Dylan

// // change my age - increment it by one year
// obj.age++;
// console.log(obj.age);


// // add in a location key/value pair to obj
// obj.location = "Milwaukee";
// console.log(obj.location);

// // add in a hatedCharacter key/ value pair to sub obj
// obj.favoriteTrilogy.hatedCharacter = "Jar Jar Binks";

// let obj = {
//   first: 'a',
//   second: 'b',
//   third: 'c'
// }

// console.log(obj.first);

// // we can assign a varible to it
// let someVariable = "first";
// console.log(obj[someVariable]); // a


// ---------------------------------------------------------------

// let obj = {
//   firstName: "Issac",
//   lastName: "Pak",
//   frequency: "everyday"
// }

// // let someVariable = "firstName";
// // let some = "last";
// // let variable = "Name";
// // let time = "FreQUenCy";

// // console.log(obj[someVariable])
// // console.log(obj[some + variable]) // Pak
// // console.log(obj[time.toLowerCase()])

// // Check if a key is in an object
// console.log(obj.age); // undefined

// if (obj.firstName !== undefined) console.log("This is in the object"); // This is in the object
// if ("firstName" in obj) console.log("This is in the object"); // This is in the object
// "in" is only used in object, do not use it in array


// -------------------------------------------------------

// let obj = {
//   firstName: "Issac",
//   lastName: "Pak",
//   frequency: "everyday"
// }

// for in loop (for obj, better use for in loop)
//  for (let key in obj){
//    console.log(key);
//    console.log(obj[key]);
//  }

// // Getting all of the keys => return an array
//  let keyArray = Object.keys(obj);
//  console.log(keyArray);

//  // Getting all of the values => return an array
//  let valueArray = Object.values(obj);
//  console.log(valueArray);

//  // Getting all of the entries => return an array
//  let entryArray = Object.entries(obj);
//  console.log(entryArray);


//---------------------------------------------------------

// Primitives
// let age = 31;
// let newAge = age; // newAge === 31
// age = newAge + 1; // age === 32  // it won't affect newAge

// console.log(age, newAge); // 32 31

// let biff = {
//   type: 'cat',
//   age: 16
// }
// console.log(biff); // { type: 'cat', age: 16 }
// let buster = biff;
// console.log(buster); // { type: 'cat', age: 16 }
// buster.age = 5;
// // console.log(biff, buster); // { type: 'cat', age: 5 } { type: 'cat', age: 5 }



//----------------------------------------------------------

// Object destructing

// Alias Destructuring: put the value of the key to a new varible name;

// let obj = { pname: 'Sandy', instrument: ['guitar', 'uke']};

// //
// let { pname, instruments} = obj;
// console.log(pname); // Sandy
// console.log(instruments); // [guitar, uke]

// let { name, instruments: music} = obj;
// console.log(pname); // Sandy
// console.log(music); // [guitar, uke]


// let character = {
//   name: "Mace Windu",
//   homeWorld: "Haruun Kal",
//   species: "Human",
//   lightsaberColor: "violet",
//   isMaster: true,
//   death: {
//     year: "19 BBY",
//     place: "Coruscant"
//   }
// }

// let { name, homeWorld, species, lightsaberColor, isMaster, death} = character; // you have to assign it to exactly the obj name
// console.log(homeWorld); // Haruun Kal
// console.log(name, homeWorld, species, lightsaberColor, isMaster, death); // Mace Windu Haruun Kal Human violet true { year: '19 BBY', place: 'Coruscant' }

// let { name: maceName, homeWorld} = character; // alias name to maceName;
// console.log(maceName, homeWorld); // Mace Windu Haruun kal;

// let { death : { year, place} } = character;
// console.log(death); // death will be undefined, because we aliasing death to year and place;
// // if you want to print the death obj, you should do this: let { death } = character;
// console.log(year); // 19 BBY;



// array destructing

// let arr = ["John", "Jim", "Jack"];
// let [first, second, three] = arr;
// console.log(first, second, three); // John Jim Jack

// Switch some variables
// let lastName = "Jeff";
// let firstName = "Granof";

// [lastName, firstName] = [firstName, lastName];
// console.log(firstName, lastName);

// console.log(arr); // [ 'John', 'Jim', 'Jack' ]
// [arr[0], arr[1]] = [arr[1], arr[0]];
// console.log(arr); // [ 'Jim', 'John', 'Jack' ]

// [arr[0], arr[1], arr[2]] = [arr[1], arr[2], arr[0]];
// console.log(arr); // [ 'Jim', 'Jack', 'John' ]

//---------------------------------------------------

//Spread and Rest

// Rest

// EXAMPLE 1:
// let yeller = function(str,...strings){
//   console.log(str, strings)
// }

// console.log(yeller("i", "am", "senate"));

// EXAMPLE 2:
// let yeller = function(...strings){
//   let result = strings.map(function(string){
//     return string.toUpperCase();
//   });
//   return result.join(" ") + "!";
// }

// console.log(yeller("i", "am", "senate"));

// Spread

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let arr3 = [0, arr1, arr2];
// console.log(arr3); // [ 0, [ 1, 2, 3 ], [ 4, 5, 6 ] ]

// let arr4 = [0, ...arr1, ...arr2];
// console.log(arr4); // [ 0, 1, 2, 3, 4, 5, 6]

// let [first, second, third] = arr3;
// arr5 = [first, ...second, ...third];
// console.log(arr5);

// let obj1 = { name: "Jeff"};
// let obj2 = { animal: 'dog', game: 'Fallen Order'};
// let obj3 = { obj1, obj2, movie: 'The Two Towers'};

// console.log(obj3);
/* result:
{
  obj1: { name: 'Jeff' },
  obj2: { animal: 'dog', game: 'Fallen Order' },
  movie: 'The Two Towers'
}
*/

// let obj4 = {...obj1, ...obj2};
// console.log(obj4); // { name: 'Jeff', animal: 'dog', game: 'Fallen Order' }
