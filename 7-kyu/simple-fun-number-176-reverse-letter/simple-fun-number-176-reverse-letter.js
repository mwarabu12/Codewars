function reverseLetter(str) {
  let result = [];
​
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "a" && str[i] <= "z") {
      result.push(str[i]);
    }
  }
​
  return result.reverse().join("");
}