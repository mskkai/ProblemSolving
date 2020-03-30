package gfg.learn.search;

import java.util.Scanner;

public class NumberAndDigitSum {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		Integer noOfTestCases = scanner.nextInt();
		int countOfValues,value,sumOfDigits,digitN,valueK;
		while (noOfTestCases>0) {
			digitN = scanner.nextInt();
			valueK = scanner.nextInt();
			countOfValues = 0;
			value = digitN;
			while(digitN>=10){
				sumOfDigits = 0;
				while(value>=10){
					sumOfDigits += value % 10;
					value /= 10;
				}
				if ((digitN - (sumOfDigits+=value)) >= valueK) {
					countOfValues++;
				} else {
					break;
				}
				digitN--;
			}
			System.out.println(countOfValues);
			noOfTestCases--;
		}
	}

}
