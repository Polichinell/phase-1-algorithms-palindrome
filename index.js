function isPalindrome(word) {
  const rword = word.toLowerCase();
  const reverse = rword.split('').reverse().join('');
  return rword === reverse;
}

/* 
Add your pseudocode here
  word gets passed

  function reverse the word

  function checks if reverse word = word

  yay!
*/



/*
  Add written explanation of your solution here

  --

  Have a plan

  punch air because nothing works
  
  turns to google-san

  rejoice
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
