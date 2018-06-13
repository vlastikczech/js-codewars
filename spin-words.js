/**Write a function that takes in a string of one or more words, and returns the 
 * same string, but with all five or more letter words reversed (Just like the name 
 * of this Kata). Strings passed in will consist of only letters and spaces. Spaces 
 * will be included only when more than one word is present.
 */ 

function spinWords(string){
    var newArray = []
    var tempString, emptyString = '';
    string = string.split(' ');
    for(var i = 0; i < string.length; i++){
        tempString = string[i].split('');
        emptyString = '';
      if(tempString.length > 5){
        for(var k = tempString.length-1; k >= 0; k--){
          emptyString = emptyString + tempString[k]
        }
        newArray.push(emptyString)
      }
      else {
       newArray.push(string[i])
      }
  
    }
    return string = newArray.join(' ');
  }