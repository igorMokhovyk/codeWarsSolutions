function filterLucky(x){
   let arrnew =  [];
   arrnew = x.filter(xs => xs.toString().includes('7'));
   return arrnew;
}
console.log(filterLucky([1,2,3,4,5,6,7,68,69,70,15,17]));