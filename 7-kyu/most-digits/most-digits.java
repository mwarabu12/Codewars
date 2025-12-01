public class MostDigits {
    public static int findLongest(int[] numbers) {
      
        int longest = numbers [0];
​
        for (int i = 1; i < numbers.length; i++) {
            int currLeng = String.valueOf(numbers[i]).length();
            int longestLeng = String.valueOf(longest).length();
            if (currLeng > longestLeng) {
                longest = numbers[i];
            } else {
              currLeng = numbers[i];
            }
        }
      
      
        return longest;
    }
}