function rotate(array, n) {
  let copy = array.slice()
  n = n % array.length;
  if (n === 0 || array.length === 0) return array;
  
  if (n > 0) {
    copy.unshift(...copy.splice(-n))
  } else {
    copy.push(...copy.splice(0, -n))
  }
  return copy;
}