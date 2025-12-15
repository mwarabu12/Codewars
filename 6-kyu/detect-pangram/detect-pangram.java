public class PangramChecker {
  public static boolean check(String sentence) {
        if (sentence == null || sentence.length() < 26) {
            return false;
        }
​
        String finalSentence = sentence.toLowerCase();
​
        for (char c = 'a'; c <= 'z'; c++) {
            if (finalSentence.indexOf(c) == -1) {
                return false;
            }
        }
    
    
        return true;
    }
}
​
​