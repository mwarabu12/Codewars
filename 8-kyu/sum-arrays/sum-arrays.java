public class SumArray {
​
  public static double sum(double[] numbers) {
    if (numbers.length == 0) {
      return 0;
    }
    
    double sum = 0;
    for (double num: numbers){
      sum += num;
    }  
      
    return sum;
  }
  
    public static void main (String[] args){
      System.out.println (sum(new double[]{21.3, 34.9, 1.2}));
    }
}