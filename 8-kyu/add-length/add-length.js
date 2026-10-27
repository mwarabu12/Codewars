function addLength(str) {
  let words = []
  for (const word of str.split(" ")) {
    words.push(`${word} ${word.length}`)
  }
  return words;
}
​