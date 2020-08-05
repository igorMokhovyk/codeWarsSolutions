function getRealFloor(n) {
    if(n >= 1 && n <=12) {
        return n - 1;
    }
    if(n >= 14){
        return n - 2;
    }
    if (n <= 0){
        return n;
    }
}