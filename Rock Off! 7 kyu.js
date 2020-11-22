function cubeOdd(arr) {
    let sum = 0;
    let count = 0;
    arr.every(test => typeof test === 'number');
    for(let el of arr){
        if(typeof el === 'number' && el % 2 !== 0){
            sum = sum + el**3;
            count++;
        }
    }
    return sum > 0 && arr.every(test => typeof test === 'number') ? sum : null;
}
console.log(cubeOdd([1, 2, 3, 4]));