function getDivisorsCnt(n) {
  let count = 0;
  
  // Only loop up to the square root of n
  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      if (i * i === n) {
        count += 1; // It's a perfect square (like 3*3 = 9), count it once
      } else {
        count += 2; // It's a pair of different divisors (like 2 and 6 for 12), count both
      }
    }
  }
  
  return count;
}