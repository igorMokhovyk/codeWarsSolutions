// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
//
// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

// https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript


function pigIt(str){
  let words = str.split(' ')
    let newW = '';
  for (let el of words) {
      if (el.length === 1 && !el.match(/[a-z|A-Z]/)) {
          newW += el;
      }
      else {
          newW += el.slice(1) + el.substring(0, 1) + "ay" + ' '
      }

  }

    return newW.trim()
}

console.log(pigIt('O This is my string !'))
