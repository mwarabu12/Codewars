const multiples = (m, n) => {
  const result = [];
  for (let i = 1; i <= m; i++) {
    result.push(i * n);
  }
  return result;
}