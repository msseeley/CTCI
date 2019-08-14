/*
Recursive Multiply:
Write a recursive function to multiply two positive integers without using the * operator. You can use addition, subtraction, and bit shifting, but you should minimize the number of those operations
*/

function recursiveMultiply(n, m) {
  if (m === 0) return 0;
  if (m === 1) return n;
  return recursiveMultiply(n + n, Math.floor(m / 2)) + recursiveMultiply(n, m % 2)
}

