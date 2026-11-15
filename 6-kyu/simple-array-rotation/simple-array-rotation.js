function solve (arr) {
  let drops = 0;
  let jumps = 0;
  
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      drops++
    } else if (arr[i] < arr[i + 1]) {
      jumps++
    }
  }
  
  if (drops === 0) {
    return 'A'
  } else if (jumps === 0) {
    return 'D'
  } else if (drops === 1 && arr[0] > arr[arr.length - 1]) {
    return 'RA'
  } else {
    return 'RD'
  }
}
​
​