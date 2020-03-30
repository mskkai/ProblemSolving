package gfg.learn.search;

import java.util.Arrays;
import java.util.Scanner;

public class SearchInArray {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		Integer noOfTestCases = scanner.nextInt();
		for (int i = 1; i <= noOfTestCases; i++) {
			Integer lengthOfArray = scanner.nextInt();
			Integer diffOfElement = scanner.nextInt();
			Integer[] inputArray = new Integer[lengthOfArray];
			for (int k = 0; k < lengthOfArray; k++) {
				inputArray[k] = scanner.nextInt();
			}
			Integer elementToBeFound = scanner.nextInt();
			Integer resultIndex = SearchInArray.getElementFromArray(inputArray, elementToBeFound);
			System.out.println(resultIndex);
		}
	}

	/**
	 * Get the element from array
	 * @param inputArray
	 * @param elementToBeFound
	 * @return
	 */
	private static Integer getElementFromArray(Integer[] inputArray, Integer elementToBeFound) {
		// TODO Auto-generated method stub
		for(int i=0; i<inputArray.length; i++){
			if(inputArray[i].equals(elementToBeFound)){
				return i;
			}
		}
		return -1;
	}
}
