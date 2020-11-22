function bigToSmall(arr){
   let newArr = [];
   for(let el of arr){
       newArr = [].concat(...arr).sort().reverse();

   }
return newArr.join('>')
}
console.log(bigToSmall([[1,2],[3,4],[5,6]]))