public class SquareDigit {
​
   public int squareDigits(int n) {
    String numStr = String.valueOf(n);
    String result = "";
    
    for (char c : numStr.toCharArray()) {
        int digit = Character.getNumericValue(c);
        result += digit * digit;
    }
    
    return Integer.parseInt(result);
  } 
}
​