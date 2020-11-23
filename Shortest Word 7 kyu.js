function findScreenHeight(width, ratio) {
    let ratioNum = []
   let ratioAnsw =  ratio.split(':');
    for(let el of ratioAnsw) {
        if (!isNaN(+el)) {
            ratioNum.push(+el);
        }
    }
    return `${width}x${width-(width - (width/(ratioNum[0] / ratioNum[1])))}`
}
console.log(findScreenHeight(1280,"16:9"));

