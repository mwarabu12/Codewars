function replace(s) {
  let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  for (let vowel of vowels) {
    if (s.includes(vowel)) s = s.replaceAll(vowel, '!');
  }
    return s
}