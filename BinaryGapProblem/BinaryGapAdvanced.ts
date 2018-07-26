class BinaryGap{
    solution(inputData:any):void{
        const binaryValue =(inputData).toString(2);
        const trimmedBinaryValue = binaryValue.slice(0, binaryValue.lastIndexOf(1)+1);
        return trimmedBinaryValue.split(1)
                                      .filter((x:any)=>x.indexOf('0')>-1)
                                      .reduce((tot:any,cur:any)=>tot.length>cur.length ? tot:cur,'')
                                      .length;
     }
  };
  let stdIn = process.openStdin();
  let inputData:number;
  let binaryGap = new BinaryGap();
  
  console.log('Enter the value to find the solution:')
  stdIn.addListener("data", function(d:any){
    inputData= parseInt(d.toString().trim());
     console.log(binaryGap.solution(inputData));
  });
  
  