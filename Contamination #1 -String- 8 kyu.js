
// An AI has infected a text with a character!!
//
// This text is now fully mutated to this character.
//
// If the text or the character are empty, return an empty string.
// There will never be a case when both are empty as nothing is going on!!
//
// Note: The character is a string of length 1 or an empty string.
//
// Example
// text before = "abc"
// character   = "z"
// text after  = "zzz"

//https://www.codewars.com/kata/596fba44963025c878000039/train/javascript


function contamination(text, char){
    if (text === null || char === null) {
        return '';
    }
    if (text === ' ') {
        return text.replace(/\S/gi, char);
    }
    return text.replace(/./gi, char)
}

console.log(contamination("_3ebzgh4"," "))


