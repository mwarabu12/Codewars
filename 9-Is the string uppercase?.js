/* Create a method to see whether the string is ALL CAPS.
Examples (input -> output)
"c" -> False
"C" -> True
"hello I AM DONALD" -> False
"HELLO I AM DONALD" -> True
In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.*/

function isAllCaps(str) {
    // Check if any lowercase letter exists in the string
    for (let i = 0; i < str.length; i++) {
      if (str[i] === str[i].toLowerCase() && str[i] !== str[i].toUpperCase()) {
        return false;  // If a lowercase letter is found, return false
      }
    }
    return true; // If no lowercase letter is found, return true
  }
  console.log(isAllCaps('Learning Js'));
  console.log(isAllCaps('LEARNING JS'));