function getCount(str) {
    var vowelsCount = 0;
    var vowels = 'aeiou';
    
    // enter your majic here
    for(var char of str.split('')){
      if(vowels.includes(char)) vowelsCount++;
    }
    
    return vowelsCount;
  }