/* Create a function that gives a personalized greeting. This function takes two parameters: name and owner.
Use conditionals to return the proper message: */

function greet (name, owner) {  
    if (name === owner) {
      return 'Hello boss';
    } else {
      return 'Hello guest';
    }
  }