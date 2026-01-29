public class Solution {
    public static int solve(String s) {
        int n = s.length();
​
        if (n % 2 != 0) return -1;
​
        int open = 0; 
        int close = 0;
​
        for (char ch : s.toCharArray()) {
            if (ch == '(') {
                open++;
            } else {
                if (open > 0) {
                    open--;
                } else {
                    close++;
                }
            }
        }
​
        return (int)(Math.ceil(open / 2.0) + Math.ceil(close / 2.0));
    }
​
}
​