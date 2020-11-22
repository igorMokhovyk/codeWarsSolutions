function arrayMadness(a, b) {
    let aSum = a.map(el => el**2).reduce((acc, cur) => acc + cur);
    let bSum = b.map(el => el**2).reduce((acc, cur) => acc + cur);
    return bSum ;

}
console.log(arrayMadness([5,6,7],[4,5,6]));