// https://www.codewars.com/kata/5547929140907378f9000039/train/javascript

// Create a function called shortcut to remove all the lowercase vowels in a given string.
//
// Examples
// shortcut("codewars") // --> cdwrs
// shortcut("goodbye")  // --> gdby

const shortcut = (string) => {
    return string.replace(/[aeiou]/g, "")
}

//console.log(shortcut('how are you today?'))

