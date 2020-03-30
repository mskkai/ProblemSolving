package gfg.learn.search;

import java.util.Arrays;
import java.util.Scanner;

public class SmallestGreaterElements {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		Integer noOfTestCases = scanner.nextInt();
		for (int i = 1; i <= noOfTestCases; i++) {
			Integer length = scanner.nextInt();
			Integer[] inputArray = new Integer[length];
			for(int j=0; j<length; j++){
				inputArray[j] = scanner.nextInt();
			}
			String[] resultArray = SmallestGreaterElements.getSmallestGreaterElements(inputArray);
			System.out.println(Arrays.toString(resultArray).replace(",", " ").replace("[", "").replace("]", ""));
		}
	}

	/**
	 * To calculate the smallest greater elements
	 * @param inputArray
	 * @return
	 */
	private static String[] getSmallestGreaterElements(Integer[] inputArray) {
		Integer[] sortedIntArray = SmallestGreaterElements.sortArray(inputArray);
		String[] resultArray = new String[inputArray.length];
		for(int i=0;i<inputArray.length; i++){
			Integer index = SmallestGreaterElements.getIndexValue(sortedIntArray, inputArray[i], 0);
			if(index==inputArray.length){
				resultArray[i] = "_";
			} else{
				resultArray[i] = sortedIntArray[index+1].toString();
			}
			
		}
		return resultArray;
	}

	/**
	 * To find the index values from the sorted array
	 * @param sortedIntArray
	 * @param integer
	 * @param currentIndex
	 * @return
	 */
	private static Integer getIndexValue(Integer[] sortedIntArray, Integer integer, Integer currentIndex) {
		for(int i=currentIndex; i<sortedIntArray.length-1; i++){
			if(integer.equals(sortedIntArray[i])){
				if(sortedIntArray[i].equals(sortedIntArray[i+1])){
					return getIndexValue(sortedIntArray, integer,i+1);
				} else{
					return i;
				}
			}
			
		}
		return sortedIntArray.length;
	}

	/**
	 * Bubble sort logic, to sort the given array
	 * @param inputArray
	 * @return
	 */
	private static Integer[] sortArray(Integer[] inputArray) {
		Integer[] sortedArray = Arrays.copyOf(inputArray, inputArray.length);
		for(int i=0; i<sortedArray.length; i++){
			for(int j=i; j<sortedArray.length; j++){
				int temp = 0;
				if(sortedArray[i]>sortedArray[j]){
					temp = sortedArray[i];
					sortedArray[i] = sortedArray[j];
					sortedArray[j] = temp;
				}
			}
		}
		return sortedArray;
	}
}
