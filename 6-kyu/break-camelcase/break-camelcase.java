class Solution {
  public static String camelCase(String input) {
    
        StringBuilder result = new StringBuilder();
        for (char charac : input.toCharArray()) {
            if (Character.isUpperCase(charac)) {
                result.append(" ");
            }
          
            result.append(charac);
        }
​
    
        return result.toString();
    }
 }