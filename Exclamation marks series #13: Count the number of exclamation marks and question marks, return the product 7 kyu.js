// Description:
// Count the number of exclamation marks and question marks, return the product.
//
// Examples
// Product("") == 0
// product("!") == 0
// Product("!ab? ?") == 2
// Product("!!") == 0
// Product("!??") == 2
// Product("!???") == 3
// Product("!!!??") == 6
// Product("!!!???") == 9
// Product("!???!!") == 9
// Product("!????!!!?") == 20


// https://www.codewars.com/kata/57fb142297e0860073000064/train/javascript


function product(s){
    let one = s.split('').filter(el => el === "!");
    let two =  s.split('').filter(el => el === "?");
    return one.length * two.length;
}
console.log(product("!????!!!?"))
