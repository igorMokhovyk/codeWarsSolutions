// In this exercise, a string is passed to a method and a new string has to be returned with the first character of each word in the string.
//
// For example:
//
// "This Is A Test" ==> "TIAT"


//https://www.codewars.com/kata/5639bdcef2f9b06ce800005b/train/javascript



function makeString(s){
  return splitted = s.split(' ').map(el => el[0]).join('')
}

console.log(makeString("kaks de gan has a big head"))
