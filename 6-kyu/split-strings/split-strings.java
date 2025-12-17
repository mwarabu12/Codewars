public class StringSplit {
    public static String[] solution(String s) {
        //Write your code here
      
        if (s.length() % 2 != 0) {
            s += "_";
        }
​
        String[] result = new String[s.length() / 2];
​
        for (int i = 0; i < s.length(); i += 2) {
            result[i / 2] = "" + s.charAt(i) + s.charAt(i + 1);
        }
​
        return result;
    }
​
}
​