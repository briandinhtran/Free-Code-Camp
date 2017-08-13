# Factorize a Number

Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example:
```
5! = 1 * 2 * 3 * 4 * 5 = 120
```
## Test Parameters:

    factorialize(5) should return a number.
    factorialize(5) should return 120.
    factorialize(10) should return 3628800.
    factorialize(20) should return 2432902008176640000.
    factorialize(0) should return 1.

## Solution 1 For Loop:

```javascript
function factorialize(num) {
  if ( num === 0 || num === 1) {
    return 1;
  }
  for (var i = num - 1; i >= 1; i--){
    num = num * i;
  }
  return num;
}
```    

## Solution 2 While Loop:

```javascript
function factorialize(num) {
  var result = num;

  if ( num === 0 || num === 1) {
  return 1; 

  while(num > 1)  {
    num--;
    result = result * num;
  }
  return result;
}  
```    