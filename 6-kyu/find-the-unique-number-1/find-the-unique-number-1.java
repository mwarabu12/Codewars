import java.util.HashMap;
import java.util.Map;
​
public class Kata {
​
    public static double findUniq(double[] arr) {
      // Do the magic
      
        Map<Double, Integer> countMap = new HashMap<>();
​
        for (double num : arr) {
            countMap.put(num, countMap.getOrDefault(num, 0) + 1);
        }
​
        for (double num : arr) {
            if (countMap.get(num) == 1) {
                return num;
            }
        }
​
        return 0;
    }
  
}
​