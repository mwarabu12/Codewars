const solve = (str, numOfCharsToRemove) => {
  let chars = [...str];
  for (const letter of 'abcdefghijklmnopqrstuvwxyz') {
    chars = chars.map(currentChar=> {
    if (currentChar === letter && numOfCharsToRemove > 0) {
    numOfCharsToRemove--;
    return '';
  } else {
    return currentChar;
  }
});
    if (numOfCharsToRemove <= 0) break;
  }
  return chars.join('');
};