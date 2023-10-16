function isPalindrome(word) {
  // Convert the word to lowercase
  word = word.toLowerCase();

  // Reverse the word
  let reversedWord = word.split("").reverse().join("");

  // Check if the reversed word is equal to the original word
  if (word === reversedWord) {
    return true; // It's a palindrome
  } else {
    return false; // It's not a palindrome
  }
}

/* 
  Add your pseudocode here

1. Convert the input word to lowercase.
2. Reverse the word by splitting it into an array of characters, reversing the array, and then joining the characters back into a string.
3. Check if the reversed word is equal to the original word.
4. Return true if the word is a palindrome, otherwise return false.
*/

/*
  Add written explanation of your solution here

  A palindrome is a word that can be read from start or from end and sound the same. To code the solution, we need to reverse the string, and compare it with original string.
*/

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
