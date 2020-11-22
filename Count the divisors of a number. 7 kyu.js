function numericalTable(n){
    let str = '';
    for(let i = 1; i <= n; i++){
        for (let j = 0; j < 5; j++) {
            str += i + ' ';


        }
        if (i < n) {
            str = str + '\n';
        }
    }
    return str;
}
console.log(numericalTable(7))
