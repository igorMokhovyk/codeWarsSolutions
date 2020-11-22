function squareDigits(num){
    let newA = [];
    let numStr = num + '';
    let numArr = numStr.split('');
    for(let el of numArr){
       newA.push(Math.pow(+el, 2));
    }
    return +newA.join('');

}
