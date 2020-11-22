
function twoOldestAges(ages){
    let arr = [];
    if(ages.length > 0){
        ages.splice(Math.max(...ages));
        arr.push(ages);
    }


    return arr;
}
console.log(twoOldestAges([1, 2, 10, 8]))