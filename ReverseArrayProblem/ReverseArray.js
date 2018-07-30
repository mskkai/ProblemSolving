"use strict";
var ReverseArray = /** @class */ (function () {
    function ReverseArray() {
    }
    ReverseArray.prototype.reverseTheGivenArray = function (inputArray, noOfRotations) {
        if (inputArray.length > 0) {
            for (var count = 0; count < noOfRotations; count++) {
                var shiftedElement = inputArray.pop();
                inputArray = [shiftedElement].concat(inputArray);
            }
        }
        return inputArray;
    };
    return ReverseArray;
}());
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var response = rl.question('Enter the array values and noofroations separated by comma : ', answer);
var reverseArray = new ReverseArray();
function answer(response) {
    console.log(response);
    var answerArray = response.toString().trim().split(' ');
    console.log(response.toString().trim().split(' '));
    var inputArray = answerArray[0].split('');
    var noOfRotations = answerArray[1];
    console.log('Input Array', inputArray);
    console.log('No Of Rotations', noOfRotations);
    console.log(reverseArray.reverseTheGivenArray(inputArray, noOfRotations));
}
