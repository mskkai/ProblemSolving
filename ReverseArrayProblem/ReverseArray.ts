class ReverseArray{
   reverseTheGivenArray(inputArray:Array<number>, noOfRotations:number){
    if(inputArray.length>0){
     for(let count=0; count<noOfRotations;count++){
       let shiftedElement:any = inputArray.pop();
       inputArray = [shiftedElement].concat(inputArray);
     }
    }
    return inputArray;
   }
}


var readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


let response = rl.question('Enter the array values and noofroations separated by comma : ', answer)

let reverseArray:ReverseArray = new ReverseArray();
function answer(response:any) {
    console.log(response);
    let answerArray = response.toString().trim().split(' ');
    console.log(response.toString().trim().split(' '));
    
    let inputArray:Array<number> = answerArray[0].split('');
    let noOfRotations:number = answerArray[1];

    console.log('Input Array',inputArray);
    console.log('No Of Rotations',noOfRotations);
    
    console.log(reverseArray.reverseTheGivenArray(inputArray,noOfRotations));
}
