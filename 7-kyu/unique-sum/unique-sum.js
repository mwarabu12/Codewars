const uniqueSum = lst => {
  if (lst.length === 0) return null;
  let unique = [];
  for (let i = 0; i < lst.length; i++) {
    if (!unique.includes(lst[i])) {
      unique.push(lst[i]);
    }
  }
  let sum = 0;
  for (let i = 0; i < unique.length; i++) {
    sum += unique[i];
  }
  return sum;
}