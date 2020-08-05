//https://www.codewars.com/kata/583710ccaa6717322c000105/train/javascript

//This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

function score  (current, level) {
 return level === 'easy' ? current + 2 :
            level === 'medium' ? current + 4 : current + 8 ;

}
console.log(score(400, 'hard'));