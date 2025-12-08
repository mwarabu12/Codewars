import java.util.ArrayList;
import java.util.List;
​
public class FindOutlier {
​
    public static int find(int[] integers) {
​
        List<Integer> evens = new ArrayList<>();
        List<Integer> odds = new ArrayList<>();
​
        for (int num : integers) {
            if (num % 2 == 0) {
                evens.add(num);
            } else {
                odds.add(num);
            }
        }
​
        if (evens.size() == 1) {
            return evens.get(0);
        } else {
            return odds.get(0);
        }
    }
}