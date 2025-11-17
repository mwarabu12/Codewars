public class Palindrome {
      public static boolean isPalindrome(String x) {
        String lower = x.toLowerCase();
​
        String reversed = "";
        for (int i = lower.length() - 1; i >= 0; i--) {
            reversed += lower.charAt(i);
        }
​
        return (lower.equals(reversed)) ? true : false;
  }
}
​