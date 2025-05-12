/*In this kata, your job is to return the two distinct highest values in a list. 
If there're less than 2 unique values, return as many of them, as possible.
The result should also be ordered from highest to lowest.

Examples:
[4, 10, 10, 9]  =>  [10, 9]
[1, 1, 1]  =>  [1]
[]  =>  []*/

function twoDistinctHighest(arr) {
    if (!arr || arr.length === 0) {
      return [];
    }
    
    const uniqueNumbers = [...new Set(arr)]; // Removing duplicates using sets
    uniqueNumbers.sort((a, b) => b - a); // Sort descending
  
    return uniqueNumbers.slice(0, 2); // Return the top 2 or fewer
  }

  console.log (twoDistinctHighest [2, 3, 5, 2, 4, 9, 8, 7, 5, 9])