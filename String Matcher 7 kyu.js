// isMatching checks if a string can be created by combining and rearranging the letters of two other strings (not case sensitive).
//
// !Spaces will be ignored but special characters and numbers won't match the string and return false.
//
// For example:
// isMatching("email box", "b aIl", "Mo x e") return true
// but
// isMatching("bouh", "0b", "uh") return false
//
// You need to be able to use all the caracters from the two strings so:
// isMatching("kata", "kt", "aaa") return false


//  https://www.codewars.com/kata/565ce4ab24ef4aee6a000074/train/javascript


const isMatching = (string, str1, str2) => {
    if ((str1 + str2).split('').filter(el => el !== ' ').join('').length
        !== string.split('').filter(el => el !== ' ').join('').length) return false;
    let separ = (str1 + str2).split('').filter(el => el !== ' ')
    let separ2 = string.split('').filter(el => el !== ' ')

    return separ2.join('').toLowerCase().split('').sort().join('')
        === separ.join('').toLowerCase().split('').sort().join('')
}

// console.log(isMatching("e  maI l box", "bail", "moxe"))
