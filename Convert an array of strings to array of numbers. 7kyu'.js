// https://www.codewars.com/kata/5783d8f3202c0e486c001d23/train/javascript

// Oh no!
// Some really funny web dev gave you an array of numbers from his API response as an array of strings!
//
// You need to cast the whole array to the correct type.
//
// Create the function
//
// JavaScript: toNumberArray(array)
// Ruby: toNumberArray(array)
// C#: ToDoubleArray(array)
// that takes as a parameter an array of numbers represented as strings and outputs an array of numbers.
//
// ie:["1", "2", "3"] to [1, 2, 3]

function toNumberArray(arr){
    return arr.map(el=> +el)
}