function noBoringZeros(n) {
  let strNum = n.toString();
  while (strNum !== '0' && strNum.endsWith(0)) strNum = strNum.slice(0, -1)
  return Number(strNum)
}