# Mutations

Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

## Solution:
```javascript

function mutation(arr) {

let word1 = arr[0].toLowerCase();
let word2 = arr[1].toLowerCase();
  
for (let i = 0; i < word2.length; i++) {
  if (word1.indexOf(word2[i]) === -1) {
    return false;
  }  
} 
  return true;
}

```
