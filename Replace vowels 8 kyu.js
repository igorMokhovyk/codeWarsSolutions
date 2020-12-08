//https://www.codewars.com/kata/5835e18aae05334410000032/train/javascript

// Create a function to replace all vowels (aeiou) of string for ?, example:
//
// replaceVogals('lorem ipsum') => 'l?r?m ?ps?m'




function replaceVogals(str) {
    return str.replace(/[aeiou]/gi, "?");
}

