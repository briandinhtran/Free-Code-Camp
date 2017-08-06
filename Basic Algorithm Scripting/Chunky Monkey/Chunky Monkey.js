function chunkArrayInGroups(arr, size) {
  let newArr = [];
  let count = 0;
  while(count < arr.length) {
  newArr.push(arr.slice(count, count + size));
  count = count + size;
  }
  return newArr;
}