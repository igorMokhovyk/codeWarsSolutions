// function sumMultN(n, m){
//   let sum = 0;
//   if(n === m){
//       return n;
//   }
//   if(n > m){
//       return 0;
//   }
//   if(n < m){
//       for(let i = n; i <= m; i = i +n){
//           sum += i;
//
//       }
//       return sum;
//   }
//
// }
// console.log(sumMultN(4,12))

// function sumOfFractionals(n){
//     let sum = 0;
//     if(n === 1){
//         return 1;
//     }
//     if(n > 0){
//         for(let i = 1; i <= n; i++){
//             sum = sum + (1/i);
//
//         }
//         return sum.toFixed(2)
//     }
//
// }
// console.log(sumOfFractionals(5))



//


function dividers(n){
    let sum = [];
    let b;
    if(n>0){
        for(let i = 1; i <= n; i++){
            if(n%i === 0){
               sum.push(i);
            }
        }

    }
    return sum;
}
console.log(dividers(200))