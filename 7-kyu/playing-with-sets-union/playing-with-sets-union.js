function union(s1, s2) {
  return new Set([...s1, ...s2]);//Here, I first combined the 2 sets into one by spread elements from both Sets using the spread operator (...) which automatically keeps only unique elements.
}
​
