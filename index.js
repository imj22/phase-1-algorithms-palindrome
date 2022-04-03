function isPalindrome(word) {
  let lettersArr = Array.from(word)
  // console.log(lettersArr)
  let reversedArr = lettersArr.reverse()
  // console.log(reversedArr)
  let reversedWord = reversedArr.join("")
  // console.log(reversedWord)
  // if (word === reversedWord) {return true} else {return false}
  // above is alternate version to lines 10 & 11. proof can be done with tenerary expression OR with if else statement
  let test = word === reversedWord ? true : false;
  return test
}


// deliverable: write a function that takes in a string as an argument and returns true (boolean) for a words that are the same backwards and forwards, including singular letter words like "a" and returns false for any words that do not meet this condition. 

// pseudocode: 
// turn string into reverse, and set it equal to a variable (placeholder backwards)
// write if else statement or tenerary expression, with condition if word parameter === backwards, return true. else return false
// write a function of if else ? that clears out the conditions of the arguments accepted. 
// write a tenerary statement ? 
  // *function* ? return true : return false 


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
