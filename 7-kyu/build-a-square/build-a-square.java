public class Kata {
       public static String generateShape(int n) {
         
        StringBuilder str = new StringBuilder();
        String row = "+".repeat(n);
​
        for (int i = 0; i < n; i++) {
            str.append(row);
            if (i < n - 1) {
                str.append("\n");
            }
        }
​
         
        return str.toString();
    }
  
}
​