function newValues(a, b, c){
    let arr = [];
    if(a < b && b < c){
        return [a *= 2, b*= 2, c *= 2];
    }else{
        return [a *= -1, b *= -1, c *= -1]
    }
}
console.log(newValues(3, 0, -1));