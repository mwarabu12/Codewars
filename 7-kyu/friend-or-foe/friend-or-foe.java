import java.util.*;
class Kata {
   public static List<String> friend(List<String> input){
     List<String> friends = new ArrayList<>();
    
     // Your code here
     for (String friend : input){
       if (friend.length() == 4){
         friends.add(friend);
       }
     }
     return friends;
   }
}