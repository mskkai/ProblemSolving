
import java.util.Arrays;
import java.util.Scanner;
import java.util.TreeMap;

public class ClosestPairFromTwoArrays {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		Integer noOfTestCases = scanner.nextInt();
		for (int i = 1; i <= noOfTestCases; i++) {
			Integer[] lengthOfArrays = new Integer[2];
			for (int k = 0; k < 2; k++) {
				lengthOfArrays[k] = scanner.nextInt();
			}

			Integer[] inputArray1 = new Integer[lengthOfArrays[0]];
			for (int j = 0; j < lengthOfArrays[0]; j++) {
				inputArray1[j] = scanner.nextInt();
			}
			Integer[] inputArray2 = new Integer[lengthOfArrays[1]];
			for (int j = 0; j < lengthOfArrays[1]; j++) {
				inputArray2[j] = scanner.nextInt();
			}
			Integer numberToBeFound = scanner.nextInt();
			Integer[] resultArray = ClosestPairFromTwoArrays.getClosestPair(inputArray1, inputArray2, numberToBeFound);
			System.out.println(Arrays.toString(resultArray).replace(",", "").replace("[", "").replace("]", ""));
		}
	}

	/**
	 * Get the closest pair
	 * 
	 * @param inputArray1
	 * @param inputArray2
	 * @param numberToBeFound
	 * @return
	 */
	private static Integer[] getClosestPair(Integer[] inputArray1, Integer[] inputArray2, Integer numberToBeFound) {

		TreeMap<Integer, Integer[]> summationMap = new TreeMap<Integer, Integer[]>();
		for (int i = 0; i < inputArray1.length; i++) {
			for (int j = 0; j < inputArray2.length; j++) {
				Integer[] currentValues = new Integer[2];
				currentValues[0] = inputArray1[i];
				currentValues[1] = inputArray2[j];
				Integer sumValue = inputArray1[i] + inputArray2[j];
				if (summationMap.get(sumValue) != null) {
					Integer[] existingValues = summationMap.get(sumValue);
					if (currentValues[1] > existingValues[1]) {
						summationMap.put(sumValue, currentValues);
					}
				} else {
					summationMap.put(sumValue, currentValues);
				}
			}
		}
		// Logic to find the result pair. If a tie, return the second pair
		Object[] keysArray = summationMap.keySet().toArray();
		Integer max = 0;
		Integer[] resultPair = new Integer[2];
		for (int i = 1; i < keysArray.length; i++) {
			Integer currentKey = (Integer) keysArray[i];
			Integer previousKey = (Integer) keysArray[i - 1];
			max = Math.max(currentKey, numberToBeFound);
			if (max.equals(currentKey)) {
				int previousDiff = numberToBeFound - previousKey;
				int currentDiff = currentKey - numberToBeFound;
				if (previousDiff > currentDiff) {
					resultPair = summationMap.get(currentKey);
					return resultPair;
				} else if (previousDiff == currentDiff) {
					Integer[] previousPair = summationMap.get(previousKey);
					Integer[] currentPair = summationMap.get(currentKey);
					if (previousPair[1] > currentPair[1]) {
						resultPair = previousPair;
					} else {
						resultPair = currentPair;
					}
					return resultPair;
				} else {
					resultPair = summationMap.get(previousKey);
					return resultPair;
				}
			}

		}
		if (resultPair[0] == null || resultPair[1] == null) {
			resultPair = summationMap.lastEntry().getValue();
		}
		return resultPair;
	}

}
