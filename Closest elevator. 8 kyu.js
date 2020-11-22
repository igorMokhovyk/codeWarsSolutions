function count(arr){
    let res = [];
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            if(arr[i][j] < 0){
                res.push(arr[i]);
                break;
            }
        }
    }
    return res.length;
}
console.log(count([[1, 4, 6], [-1, 6 -9], [9, 4, -43]]));