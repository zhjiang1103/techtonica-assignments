// Week 3 - Objects

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js or using Replit.com
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Write a function called keys, which accepts an object and returns an array of all of the keys in the object.
// IMPORTANT: Do not use the built in Object.keys() function!
// Examples:
function keys(object){
    let arr=[];
    for (let key in object){
        arr.push(key)
    };
    return arr;
}
let obj = { a: 1, b: 2, c: 3 };
console.log(keys(obj)); // ["a", "b", "c"]
let obj2 = { first: 'Matt', last: 'Lane' };
console.log(keys(obj2)); // ["first", "last"]
let obj3 = {};
console.log(keys(obj3)); // []

// Exercise 2. Write a function called values, which accepts an object and returns an array of all of the values in the object.
// IMPORTANT: Do not use the built in Object.values() function!
// Examples:
function values(object){
        let arr=[];
        for (let key in object){
            arr.push(object[key])
        };
        return arr;
    
}
obj = { a: 1, b: 2, c: 3 };
console.log(values(obj)); // [1,2,3]
obj2 = { first: 'Matt', last: 'Lane', isDogOwner: true };
console.log(values(obj2)); // ["Matt", "Lane", true]
obj3 = {};
console.log(values(obj3)); // []

// Exercise 3. Write a function called entries, which accepts an object and returns an array of arrays of key-value pairs.
// In other words, each sub-array is an "entry" in the object with two elements: the first element is the key, and the second element is the value.
// IMPORTANT: Do not use the built in Object.entries() function!
// Examples:
function entries(object){
    let arr=[];
    for (let key in object){
        arr.push([key,object[key]])
    };
    return arr;
}
obj = { a: 1, b: 2, c: 3 };
console.log(entries(obj));
//[["a",1], ["b",2], ["c",3]]
obj2 = { first: 'Matt', last: 'Lane', isDogOwner: true };
console.log(entries(obj2));
// [["first","Matt"], ["last","Lane"], ["isDogOwner",true]]
obj3 = {};
console.log(entries(obj3)); // []

// Exercise 4. Write a function called pluck, which takes an array of objects and the name of a key.
// The function should return an array containing the value associated with that key for each object, or undefined if that key is not present in the object.
// Examples:
function pluck(arrObjects,key){
    let result=[];
    for (let index in arrObjects){
        if (arrObjects[index].hasOwnProperty(key)) {
            result.push(arrObjects[index][key])
        }
        else {result.push(undefined)}
    };
    return result;
}

console.log(pluck([{ name: "Tim" }, { name: "Matt" }, { name: "Elie" }],'name'))
// ["Tim", "Matt", "Elie"]
console.log(pluck([{ name: "Tim", isBoatOwner: true }, { name: "Matt", isBoatOwner: false }, { name: "Elie" }],'isBoatOwner'))
// [true, false, undefined]

// Exercise 5. Write a function called stringFromObject that generates a string from an object's key/value pairs.
// The format should be "key = value, key = value".
// Each key/value pair should be separated by a comma and space except for the last pair.
// Examples:
function stringFromObject(object){
    let str='';
    let result='';
    if (Object.keys(object).length === 0){return ""; }
    
    for (let key in object){
        str += `${key}=${object[key]}, `
    }
    result=str.slice(0,str.length-2)
    return result;
}
console.log(stringFromObject({ a: 1, b: '2' }));
// "a = 1, b = 2"
console.log(stringFromObject({ name: 'Elie', job: 'Instructor', isCatOwner: false }));
// "name = Elie, job = Instructor, isCatOwner = false"
let result1=stringFromObject({});
console.log(result1,typeof(result1) ); // ""

// Exercise 6. Write a function called minMaxKeyInObject that accepts an object with numeric keys.*
// The function should return an array with the following format: [lowestKey, highestKey]
// Examples:
function minMaxKeyInObject(object){
    let lowestKey = Infinity;
    let highestKey = -Infinity;
    for (let k in object){
        let key=parseInt(k);
        if(key < lowestKey){
            lowestKey=key;
        }
        if (key > highestKey){
            highestKey=key;
        }
    }
    return [lowestKey, highestKey];
}
console.log(minMaxKeyInObject({ 2: 'a', 7: 'b', 1: 'c', 10: 'd', 4: 'e' }));
// [1, 10]
console.log(minMaxKeyInObject({ 1: 'Elie', 4: 'Matt', 2: 'Tim' }));
// [1, 4]
