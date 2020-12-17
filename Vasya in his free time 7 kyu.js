// Vasya has a very limited amount of free time. During these precision minutes he likes to think about strings containing zeros and ones.
//
// Vasya considers the following operation: he chooses any two adjacent positions in the string, and if one of them contains 0, and the other contains 1, then we are allowed to remove these two digits from the string.
//
// Now Vasya thinks of what is the minimum length of the string that can remain after applying the described operation several times (possibly, zero)? Help him to calculate this number.
//
// ###Input First line of the input contains a single integer n, (1 ≤ n ≤ 500000), the length of the string Vasya has. The second line contains the string of length n consisting only from zeros and ones.


// https://www.codewars.com/kata/559011063089b0d5500001aa/train/javascript

const CalculateString = ( n,  nums) => {
    let ones = nums.split('')
    let countOne = 0;
    let counttwo = 0;
    for (let el of ones) {
        if (el === "1"){
            countOne++;
        }
        if (el === "0"){
            counttwo++;
        }
    }
    return Math.abs(countOne - counttwo)
}

console.log(CalculateString(5,"11101111"))
