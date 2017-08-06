# Seek and Destroy

You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

## Test Parameters:

    destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1].
    destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1].
    destroyer([3, 5, 1, 2, 2], 2, 3, 5) should return [1].
    destroyer([2, 3, 2, 3], 2, 3) should return [].
    destroyer(["tree", "hamburger", 53], "tree", 53) should return ["hamburger"].


## Solution 1: Using For Loops
```javascript
function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments);
  for (var i = arr.length - 1; i >= 0; i--) {
    for (var j = 0; j < args.length; j++) {
      if (arr[i] === args[j]) {
        arr.splice(i, 1);
      }
    }
  }
  return arr;
}
```

## Solution 2: Using Array.prototype.filter and Array.prototype.includes

```javascript
function destroyer(arr) {
  var args = Array.from(arguments).slice(1);
  return arr.filter( (x) => !args.includes(x) );
}