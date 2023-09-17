// Q1 fin if a number is a power of four like 16 is power of 4
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    //If the log of base 4 returns an integer, The given number is a Power of Four
    // We can get the log of y base x by =>  Math.log(y)/Math.log(x)
    let x = Math.log(n)/Math.log(4);
    if(Number.isInteger(x))
    {
        return true;
    }
    else {
        return false;
    }
};
console.log(isPowerOfFour(1));
console.log(isPowerOfFour(16));
console.log(isPowerOfFour(5));