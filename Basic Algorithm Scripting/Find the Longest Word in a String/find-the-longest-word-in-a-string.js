function findLongestWord(str) {
  var longestWord = "";
  str = str.split(" ");
  console.log(str);
  for (var i = 0; i < str.length; i++) {
    if (longestWord.length < str[i].length) {
      longestWord = str[i];
    }
  }
  return longestWord.length;
}