// https://www.hackerrank.com/challenges/simple-array-sum/problem

function simpleArraySum(ar) {
    // var sum;
    // for each element in the array;
    // add to the sum
    // return sum
    //input -> arr = [1,2,3,4,10,11]
    // output -> [31]
    var sum = 0;
    for (let num of ar) {
        sum = num + sum
    }
    return sum;
}

