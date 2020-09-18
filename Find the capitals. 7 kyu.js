// https://www.codewars.com/kata/539ee3b6757843632d00026b/train/javascript


// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.
//
// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );


const capitals = function (word) {
    let res = [];
    let wordSplit = word.split('')
    for(let i = 0; i < wordSplit.length; i++){
        if(wordSplit[i].match(/[A-Z]/g)){
            res.push(i)
        }
    }
    return res
};


