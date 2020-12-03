//https://www.codewars.com/kata/5868812b15f0057e05000001/train/javascript

//You'll be given a list of two strings, and each will contain exactly one colon (":") in the middle (but not at beginning or end). The length of the strings, before and after the colon, are random.
//
// Your job is to return a list of two strings (in the same order as the original list), but with the characters after each colon swapped.
//
// Examples
// ["abc:123", "cde:456"]  -->  ["abc:456", "cde:123"]
// ["a:12345", "777:xyz"]  -->  ["a:xyz", "777:12345"]


const tailSwap = (arr) => {
    let arr1 = arr[0].split(':');
    let arr2 = arr[1].split(':');
    return [`${arr1[0]}:${arr2[1]}`, `${arr2[0]}:${arr1[1]}`]
}
