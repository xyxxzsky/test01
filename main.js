
function isLeapYear(year){
    if(year % 400 ===0){
        return true
    }
    if(year % 100 ===0){
        return false
    }
    if(year % 4 ===0){
        return true
    }
    return false
}

console.log("2000:" + isLeapYear(2000));

const fibonacci = require('./lib/fibonacci')
for( i = 1; i < 20; ++i){
    console.log(fibonacci(i));
}
