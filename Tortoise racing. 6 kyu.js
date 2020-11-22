function nDecimalDigits(num, n){
    let arr = +num.toFixed(n);
    let b = arr - num;
    return +(arr - b).toFixed(n+1);
}
console.log(nDecimalDigits(6.642867, 3))