# Chucky Monkey
## Free Code Camp:
Write a function that splits an array (first argument) into groups the length of _size_ (second argument) and returns them as a two-dimensional array.

### Test Parameters:
    chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].
    chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]].
    chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) should return [[0, 1], [2, 3], [4, 5]].
    chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]].
    chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) should return [[0, 1, 2], [3, 4, 5], [6]].
    chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
    chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].

### Solution:

This solution uses _slice_ and a _while loop_. We increment a count (position) with size to determine what to push onto the newArr. Our loop will run as long as the count is less than the length of arr.

```javascript
function chunkArrayInGroups(arr, size) {
  let newArr = [];
  let count = 0;
  while(count < arr.length) {
    newArr.push(arr.slice(count, count + size));
  count = count + size;
  }
  return newArr;
}
```
