function race(v1, v2, g) {
    let arrRes = [];
    let v1Sec = v1/3600;
    let v2Sec = v2/3600;
    let aStart = 70;
    let bStart = 0;
    let time = 0;
    if(v1 >= v2){
        return null;
    }
    while(bStart <= aStart){
        aStart += v1Sec;
        bStart += v2Sec;
        time++

    }
    arrRes.push(Math.trunc(time/3600));
    arrRes.push(Math.trunc(time/60));
    //let sec = time - (time/3600 + time/60);
    return arrRes;
}
console.log(race(80, 100, 40))