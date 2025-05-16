/*You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.
The returned value must be a string, and have "***" between each of its letters.
You should not remove or add elements from/to the array.*/

function twoSort (s) {
    s.sort ();
    let firstValue = s [0];
    return firstValue.split('').join('***'); //Here, the split() method divides a string into an ordered list of substrings, placing these substrings into an array, and returning the array. 
    // The split() method does not modify the original string.
}

console.log (twoSort (['Codewars']))