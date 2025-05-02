/*Remove all exclamation marks from the end of sentence
Examples
"Hi!"     ---> "Hi"
"Hi!!!"   ---> "Hi"*/

function remove(string) {
    for (let i = string.length - 1; i >= 0; i--) {
      if (string[i] === "!") {
        string = string.slice(0, i);
      } else {
        break; // Stop once a non-exclamation mark is found from the end
      }
    }
    return string;
  }