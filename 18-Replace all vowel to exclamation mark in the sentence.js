/* Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.
Examples
"Hi!" --> "H!!"
"!Hi! Hi!" --> "!H!! H!!" */

const replace = (s) => {
    return s.replace(/[aeiou]/gi, "!");
}