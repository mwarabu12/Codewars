function findNextSquare(sq) {
  let root = Math.sqrt(sq);
  
  // Check if the square root is a whole number
  if (Number.isInteger(root)) {
    return Math.pow(root + 1, 2);
  }
  
  return -1;
}
​