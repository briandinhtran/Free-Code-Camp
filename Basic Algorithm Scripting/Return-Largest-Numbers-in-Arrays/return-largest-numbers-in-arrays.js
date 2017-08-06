function largestOfFour(arr) {
 var largestNumber = [0,0,0,0];
  for(var i = 0; i < arr.length; i++)
  for(var j = 0; j < arr.length; j++)
  if (arr[i][j] > largestNumber[i]) {
    largestNumber[i] = arr[i][j];
  }
  return largestNumber;
}
