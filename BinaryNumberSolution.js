"use strict";
var BinaryNumberSolution = /** @class */ (function () {
    function BinaryNumberSolution() {
    }
    BinaryNumberSolution.prototype.solution = function (inputData) {
        console.log('Entered value is', inputData);
        var count = 0;
        var tempCount = 0;
        var binaryNum = '';
        var onesCount = 0;
        if (inputData < 2) {
            console.log('No Zeros Found');
            process.stdin.pause();
        }
        else {
            while (inputData >= 1) {
                if (inputData % 2 == 0) {
                    tempCount++;
                    binaryNum = 0 + binaryNum;
                }
                else {
                    onesCount++;
                    if (tempCount > count && onesCount > 1) {
                        count = tempCount;
                    }
                    tempCount = 0;
                    binaryNum = 1 + binaryNum;
                }
                inputData = Math.floor(inputData / 2);
            }
            console.log('Binary Number is:', binaryNum);
            console.log('The greatest number of zereos:', count);
            process.stdin.pause();
        }
    };
    return BinaryNumberSolution;
}());
;
var stdin = process.openStdin();
var inputValue;
var binaryNumberSolution = new BinaryNumberSolution();
console.log('Enter the value to find the solution:');
stdin.addListener("data", function (d) {
    inputValue = parseInt(d.toString().trim());
    binaryNumberSolution.solution(inputValue);
});
