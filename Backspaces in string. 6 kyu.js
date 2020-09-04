
// https://www.codewars.com/kata/5727bb0fe81185ae62000ae3/train/javascript

// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"
//
// Your task is to process a string with "#" symbols.
//
// Examples
// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""






function cleanString(s) {
    const result = []
    for (const c of s) {
        if (c === "#") {
            result.pop()
        } else {
            result.push(c)
        }
    }
    return result.join("")
}