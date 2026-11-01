function sumTwoSmallestNumbers(numbers) {  
  let sorted = numbers.toSorted((a, b) => a -b)
  let smallTwo = sorted.slice(0, 2)
  return smallTwo.reduce((acc, cur) => acc + cur, 0)
}