// https://www.codewars.com/kata/57f6ad55cca6e045d2000627/train/javascript

// #To square(root) or not to square(root)
//
// Write a method, that will get an integer array as parameter and will process every number from this array.
// Return a new array with processing every number of the input-array like this:
//
// If the number has an integer square root, take this, otherwise square the number.
//
// [4,3,9,7,2,1] -> [2,9,3,49,4,1]
// The input array will always contain only positive numbers and will never be empty or null.
//
// The input array should not be modified!
//
// Have fun coding it and please don't forget to vote and rank this kata! :-)
//
// I have also created other katas. Take a look if you enjoyed this kata!

function squareOrSquareRoot(arr) {
    let newArr = [];
    for(let el of arr){
        if(Math.pow(el, 0.5) === Math.trunc(Math.sqrt(el))){
            newArr.push(Math.pow(el, 0.5));
        }
        else{
            newArr.push(Math.pow(el, 2));
        }
    }
    return newArr;
}