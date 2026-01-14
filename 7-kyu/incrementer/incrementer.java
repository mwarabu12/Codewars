public class Kata {
  
  public static int[] incrementer(int[] numbers) {
    int[] result = new int[numbers.length];
​
        for (int i = 0; i < numbers.length; i++) {
            int newValue = numbers[i] + (i + 1);
            result[i] = newValue % 10;
        }
​
        return result;
    }
}