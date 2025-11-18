public class Solution {
​
    public static String camelCase(String str) {
      str= str.trim();
      if(str.length() == 0) return "";
        String[] words = str.split("\\s+");
​
        String result = "";
​
      
        for (int i = 0; i < words.length; i++) {
            String word = words[i];
            String firstLetter = word.substring(0, 1).toUpperCase();
            String rest = word.substring(1).toLowerCase();
            result += firstLetter + rest;
        }
​
        return result;
    }
}
​