function gimme(arr) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < Math.max(...arr) && arr[i] > Math.min(...arr)){
            return arr.indexOf(arr[i]);
        }
    }
};
console.log(gimme([8, 3, 1]))