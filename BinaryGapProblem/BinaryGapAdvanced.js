"use strict";
var BinaryGap = /** @class */ (function () {
    function BinaryGap() {
    }
    BinaryGap.prototype.solution = function (inputData) {
        var binaryValue = (inputData).toString(2);
        var trimmedBinaryValue = binaryValue.slice(0, binaryValue.lastIndexOf(1) + 1);
        return trimmedBinaryValue.split(1)
            .filter(function (x) { return x.indexOf('0') > -1; })
            .reduce(function (tot, cur) { return tot.length > cur.length ? tot : cur; }, '')
            .length;
    };
    return BinaryGap;
}());
;
var stdIn = process.openStdin();
var inputData;
var binaryGap = new BinaryGap();
console.log('Enter the value to find the solution:');
stdIn.addListener("data", function (d) {
    inputData = parseInt(d.toString().trim());
    console.log(binaryGap.solution(inputData));
});
