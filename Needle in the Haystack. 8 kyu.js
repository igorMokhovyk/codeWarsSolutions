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
console.log(capitals('CodEWaRs'), [0,3,4,6])


















