/*Given a string str, reverse it and omit all non-alphabetic characters.
Example
For str = "krishan", the output should be "nahsirk".
For str = "ultr53o?n", the output should be "nortlu".*/

function reverseAndOmit(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
      const char = str[i];
      if (char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z') {
        reversed += char;
      }
    }
    return reversed;
  }
