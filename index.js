function largestNumberOfMushrooms(arr) {
let maxMash = arr[0][1];
let name = arr[0][0];
for(let i = 0; i < arr.length; i++) {
    if (arr[i][1] > maxMash) {
        maxMash = arr[i][1];
        name = arr[i][0];
    }
}
return `${name}: ${maxMash}`;
}

console.log(largestNumberOfMushrooms([["Maria", 15], ["Anna", 21], ["Ivan", 32]]));