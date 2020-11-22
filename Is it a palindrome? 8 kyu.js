function solve(s) {
    let countUpper = 0;
    let countLower = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i].match(/[A-Z]/g)) {
            countUpper++
        }
        if (s[i].match(/[a-z]/g)) {
            countLower++
        }
    }
    return countUpper > countLower ? s.toUpperCase() : s.toLowerCase();
}

console.log(solve("CODe"))
