function fillArray(n) {
    let arr = [];
    for (let i = 2; i <= n; i++) {
        if (arr[i] % 3 === 0) {
            continue;
        }else if(i % 2===0 && i % 3 !== 0){
            arr.push(i);
        }

    }
    return arr;
}
console.log(fillArray(10));