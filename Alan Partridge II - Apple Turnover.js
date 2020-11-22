function sumsInArray(arr){
    let sum = [];
    for(let i = 0; i < arr.length; i++){
        let s = 0;
        for (let j = 0; j < arr[i].length; j++){
            s += arr[i][j];
        }
        sum.push(s);
    }
    return sum;
}
console.log(sumsInArray([[1, 2], [2, -3], [3, 5], [3, 7]]))