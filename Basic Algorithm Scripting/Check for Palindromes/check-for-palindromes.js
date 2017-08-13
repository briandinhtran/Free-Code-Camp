function palindrome(str) {
  str = str.toLowerCase();
  str = str.replace(/[\W_]/g, "");

  var reversedStr = str.split("").reverse().join("");
  if (str === reversedStr) {
    return true;
  } 
  return false;
}