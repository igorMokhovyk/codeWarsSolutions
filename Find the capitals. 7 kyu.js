function calculate(string) {

  return string.includes('loses') ? string.split(' ').filter(el => !isNaN(el)).map(el => +el).reduce((ac, cur) => ac - cur ) : string.split(' ').filter(el => !isNaN(el)).map(el => +el).reduce((ac, cur) => ac + cur );
}
console.log(calculate("Panda has 48 apples and loses 4"))