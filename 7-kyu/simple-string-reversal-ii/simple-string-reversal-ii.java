public class Solution {
    public static String solve(String str, int a, int b) {
        //...
        
      if (b >= str.length()) {
            b = str.length() - 1;
        }
​
        String before = str.substring(0, a);
​
        String middle = str.substring(a, b + 1);
        String reversed = new StringBuilder(middle).reverse().toString();
​
        String after = str.substring(b + 1);
​
        return before + reversed + after;
    }
}
​