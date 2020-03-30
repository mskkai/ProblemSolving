import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class MaximumSumOfIncreasingOrder {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		Integer noOfTestCases = scanner.nextInt();
		for (int i = 1; i <= noOfTestCases; i++) {
			Integer noOfArrays = scanner.nextInt();
			Integer lengthOfArrays = scanner.nextInt();
			Integer[][] inputArrays = new Integer[noOfArrays][lengthOfArrays];
			for (int j = 0; j < noOfArrays; j++) {
				for (int k = 0; k < lengthOfArrays; k++) {
					inputArrays[j][k] = scanner.nextInt();
				}
			}
			Integer resultIndex = MaximumSumOfIncreasingOrder.getMaximumSum(inputArrays, noOfArrays);
			System.out.println(resultIndex);
		}
	}

	/**
	 * Get the maximum Sum
	 * @param inputArrays
	 * @param noOfArrays
	 * @return
	 */
	private static Integer getMaximumSum(Integer[][] inputArrays, Integer noOfArrays) {
		int maximumSum = 0, maximumElement = 0;
		List<Integer> maxElements = new ArrayList<Integer>();
		for (int i = 0; i < inputArrays.length; i++) {
			inputArrays[i] = MaximumSumOfIncreasingOrder.sortArray(inputArrays[i]);
		}
		
        for(int i = inputArrays.length-1; i>=0; i--){
        	if(i==inputArrays.length-1){
    			maximumElement = inputArrays[i][inputArrays[i].length - 1];
    			maxElements.add(maximumElement);
    		} else{
    			maximumElement = MaximumSumOfIncreasingOrder.getMaximumElement(inputArrays[i], maximumElement, inputArrays[i].length-1);
    			maxElements.add(maximumElement);
    		}
        }
        if(maxElements.contains(0)){
        	return maximumSum;
        } else{
        	for(Integer value: maxElements){
        		maximumSum+=value;
        	}
        	return maximumSum;
        }
	}
	
	/**
	 * Get Maximum Element from i-1 array by comparing with max element from i array
	 * @param sortedArray
	 * @param maximumElement
	 * @param index
	 * @return
	 */
	private static Integer getMaximumElement(Integer[] sortedArray, Integer maximumElement, Integer index){
		if(index==-1){
			return 0;
		}
		if(maximumElement>sortedArray[index]){
			return sortedArray[index];
		} else{
			return MaximumSumOfIncreasingOrder.getMaximumElement(sortedArray, maximumElement, index-1);
		}
	}

	/**
	 * Sort the array in ascending order - Bubble sort
	 * @param inputArray
	 * @return
	 */
	private static Integer[] sortArray(Integer[] inputArray) {
		for (int i = 0; i < inputArray.length; i++) {
			for (int j = i; j < inputArray.length; j++) {
				int temp = 0;
				if (inputArray[i] > inputArray[j]) {
					temp = inputArray[i];
					inputArray[i] = inputArray[j];
					inputArray[j] = temp;
				}
			}
		}

		return inputArray;
	}
}
