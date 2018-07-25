class BinaryNumberSolution{
  solution(inputData:any):void{
      console.log('Entered value is', inputData);
      let count:number = 0;
      let tempCount:number = 0;
      let binaryNum:string ='';
      let onesCount:number = 0;
     
        if(inputData<2){
          console.log('No Zeros Found');
          process.stdin.pause();
        } else{
          while(inputData>=1){
            if(inputData%2 ==0){
              tempCount++;
              binaryNum = 0 + binaryNum;
            } else{
                onesCount++;
                if(tempCount>count && onesCount>1){
                  count = tempCount;
                }
                tempCount = 0;
                binaryNum = 1 + binaryNum;
            }
            inputData = Math.floor(inputData/2);
          }
          console.log('Binary Number is:', binaryNum);
          console.log('The greatest number of zereos:', count);
          process.stdin.pause();
        }
  }
};
let stdin = process.openStdin();
let inputValue:number;
let binaryNumberSolution = new BinaryNumberSolution();

console.log('Enter the value to find the solution:')
stdin.addListener("data", function(d:any){
   inputValue= parseInt(d.toString().trim());
   binaryNumberSolution.solution(inputValue);
});

