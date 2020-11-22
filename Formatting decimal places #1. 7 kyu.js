//


function victoryInSwim(arr){
    let arr2 = [];
  for(let el of arr){
      arr2.push(el[1])
  }
  return Math.min(...arr2);
}
console.log(victoryInSwim([['Nick',8], ['Bob', 10], ['Kim', 6]]))