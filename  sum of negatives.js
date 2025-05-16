/*Given an array of integers.
Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 
0 is neither positive nor negative.
If the input is an empty array or is null, return an empty array.*/

function countPositivesSumNegatives(input) {
    if (!input || input.length === 0) {
      return [];
    }
    let positiveCount = 0;
    let negativeSum = 0;
  
    for (const num of input) {
      if (num > 0) {
        positiveCount++;
      } else if (num < 0) {
        negativeSum += num;
      }
    }
    return [positiveCount, negativeSum];
  }function countPositivesSumNegatives(input) {
    if (!input || input.length === 0) {
      return [];
    }
    let positiveCount = 0;
    let negativeSum = 0;
  
    for (const num of input) {
      if (num > 0) {
        positiveCount++;
      } else if (num < 0) {
        negativeSum += num;
      }
    }
    return [positiveCount, negativeSum];
  }
  console.log (countPositivesSumNegatives([-23, -21, 54, 12, 9, -3, 0, 4]))