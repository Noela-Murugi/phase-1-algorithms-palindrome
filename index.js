function isPalindrome(word) {
  // Write your algorithm here
  let palindromeWord = word.toLowerCase();
  let reversePalindrome = palindromeWord.split('').reverse().join('');
  if(  palindromeWord === reversePalindrome){
    return true;
  }else{
    return false;
  }

}

/*
  Add your pseudocode here

  Initialize a variable called palindromeWord that sets word to lowercase
  Initialize another variable called reversePalindrome that reverses what is stored on palindromeWord variable
  Have a conditional statement
    Check if both variable word stings are similar or <noscript>
      If they are, then return true
      If not, then return false
      
  </noscript>
*/

/*
  Add written explanation of your solution here
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
