// Some people just have a first name; some people have first and last names and some people have first, middle and last names.
//
// You task is to initialize the middle names (if there is any).
//
// Examples
// 'Jack Ryan'                   => 'Jack Ryan'
// 'Lois Mary Lane'              => 'Lois M. Lane'
// 'Dimitri'                     => 'Dimitri'
// 'Alice Betty Catherine Davis' => 'Alice B. C. Davis'


// https://www.codewars.com/kata/5768a693a3205e1cc100071f/train/javascript


function initializeNames(name){
    let shortName = '';
    let namesArr = name.split(' ')
    for (let i = 1; i < namesArr.length -1; i++) {
        shortName += namesArr[i][0] + '.' + ' ';
    }
    return name.split(' ').length <= 1  ? name : `${namesArr[0]} ${shortName}${namesArr[namesArr.length -1]}`;
}

console.log(initializeNames('Alice'));
