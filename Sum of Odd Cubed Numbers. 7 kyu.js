// https://www.codewars.com/kata/580dda86c40fa6c45f00028a/train/javascript

// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined/None/nil/NULL if any of the values aren't numbers.

function cubeOdd(arr) {
    let sum = 0;
    let count = 0;

    for(let el of arr){
        if(typeof el === 'number' && el % 2 !== 0){
            sum = sum + el**3;
            count++;
        }
    }
    return sum <= 0  || sum >= 0  && arr.every(test => typeof test === 'number') ? sum : undefined;
}