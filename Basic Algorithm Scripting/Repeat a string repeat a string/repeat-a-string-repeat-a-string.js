function repeatStringNumTimes(str, num) {
  var answerStr = "";
  count = 0;
  while(count < num) {
  answerStr += str;
  count++;
  }
  return answerStr;
}