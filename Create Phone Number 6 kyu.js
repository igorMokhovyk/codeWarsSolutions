//https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript

//Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
//
// Example:
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.
// Don't forget the space after the closing parentheses!


function createPhoneNumber(numbers){
const splitNum = [];
for (let el of numbers) {
    splitNum.push(el.toString())
}
return `(${splitNum[0]+splitNum[1]+splitNum[2]}) ${splitNum[3]+splitNum[4]+splitNum[5]}-${splitNum[6]+splitNum[7]+splitNum[8]+splitNum[9]}`
}