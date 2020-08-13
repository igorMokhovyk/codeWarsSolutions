//https://www.codewars.com/kata/57a049e253ba33ac5e000212/train/javascript


//Yor task is to write function factorial
//
// https://en.wikipedia.org/wiki/Factorial

const factorial = n => n ? factorial(n - 1) * n : 1;


//or



// function factorial(n){
//     let answer = 1;
//
//     while (n > 0) {
//         answer *= n;
//         n--;
//     }
//
//     return answer;
}