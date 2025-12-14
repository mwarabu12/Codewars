public class Kata {
​
  public static int makeNegative(final int x) {
    if (x > 0){
      return -x;
    }
    else if (x == 0) {
      return 0;
    }
    else {
      return x;
    }
  }
  
}