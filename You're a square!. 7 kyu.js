function upsd(n){
   let s = "";
   for(let i = 1; i <= n; i++){
       for(let j = n; j>=i; j--){
           s = s + '*';
       }
       if(i<n){
           s = s + '\n'
       }
   }
   return s;
}
console.log(upsd(4))

