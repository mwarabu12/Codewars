public class Kata {
    public static double findUniq(double arr[]) {
      // Do the magic
      
      double common;
      if (arr[0] == arr [1] || arr[0] == arr[2]){
        common = arr [0];
      } else {
        common = arr [1];
      }
      
      for (double num : arr){
        if (num != common){
          return num;
        }
      }
      
      return 0;
    }
   
}