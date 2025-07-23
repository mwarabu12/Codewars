const mergeArrays = (arr1, arr2) => {
  let combined = [...arr1, ...arr2];
  let uniqueValues = [...new Set(combined)];
  uniqueValues.sort((a, b) => a - b);
  return uniqueValues;
}