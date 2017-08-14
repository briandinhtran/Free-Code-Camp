# Repeat a string repeat a string

Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.

## Tests:
    repeatStringNumTimes("*", 3) should return "***".
    repeatStringNumTimes("abc", 3) should return "abcabcabc".
    repeatStringNumTimes("abc", 4) should return "abcabcabcabc".
    repeatStringNumTimes("abc", 1) should return "abc".
    repeatStringNumTimes("*", 8) should return "********".
    repeatStringNumTimes("abc", -2) should return "".
## Solution 1: Creating Two Variables
This solutions uses two variables, answerStr and count to solve the problem.
```javascript
function repeatStringNumTimes(str, num) {
  var answerStr = "";
  count = 0;

  while(count < num) {
  answerStr += str;
  count++;
  }
  return answerStr;
}
```

## Solution 1: Creating One Variable
This solutions simplifies solution one by only using one variables, answerStr solve the problem.
```javascript
function repeatStringNumTimes(str, num) {
  var answerStr = "";

  while(num > 0) {
  answerStr += str;
  num--;
  }
  return answerStr;
}

repeatStringNumTimes("tree", 3)
```
