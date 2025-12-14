import java.util.*;
​
public class Kata
 {
  public static int squareSum(int[] n)
  { 
   //Your Code
    return Arrays.stream(n).map(x -> x * x).sum();
  }
 }